const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const { db, jwt_secret } = require("./config");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (formMail, formPassword, done) => {
      try {
        const [
          sqlRes,
        ] = await db
          .promise()
          .query(`SELECT id, email, password FROM users WHERE email=?`, [
            formMail,
          ]);
        if (!sqlRes.length) return done(null, false);
        const { id, email, password } = sqlRes[0];
        const isPasswordOK = bcrypt.compareSync(formPassword, password);
        if (!isPasswordOK) return done(null, false, "Mauvais mot de passe!");

        const user = { id, email };
        return done(null, user);
      } catch (e) {
        console.log(e);
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwt_secret,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
