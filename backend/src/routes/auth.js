const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

router.post("/register", async (req, res) => {
  try {
    const formData = req.body;
    formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
    const [sqlRes] = await db
      .promise()
      .query(`INSERT INTO users SET ?`, formData);
    delete formData.password;
    formData.id = sqlRes.insertId;
    const token = jwt.sign(formData, jwt_secret);
    res.status(201).json({ user: formData, token });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.post("/login", passport.authenticate("local"), async (req, res) => {
  try {
    const token = jwt.sign(req.user, jwt_secret);
    res.status(200).json({ user: req.user, token });
  } catch (e) {
    res.status(500).send("Erreur serveur");
    console.log(e);
  }
});

module.exports = router;
