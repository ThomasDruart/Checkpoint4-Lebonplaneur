const express = require("express");
const passport = require("passport");
const cors = require("cors");

const port = 5050;
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

// Auth routes
app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/misc"));

// 404 and server launch
app.use((req, res) => {
  const msg = `Page not found: ${req.url}`;
  console.warn(msg);
  res.status(404).send(msg);
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
