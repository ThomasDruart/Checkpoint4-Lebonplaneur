const express = require("express");
const connection = require("./config");
const cors = require("cors");

const port = 5050;
const app = express();

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Get all gliders to sell
app.get("/gliders", (req, res) => {
  connection.query(
    `SELECT image, model, year, price, location FROM gliders`,
    (err, results) => {
      if (err) {
        res.status(500).send("erreur lors de la récupération des planeurs");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// config
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
