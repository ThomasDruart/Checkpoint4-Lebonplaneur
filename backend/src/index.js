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

// Get gliders by id
app.get("/gliders/:id", (req, res) => {
  connection.query(
    "SELECT image, image2, image3, model, year, price, resume  FROM gliders WHERE id=? ",
    [req.params.id],
    (err, result) => {
      if (err)
        return res.status(500).send("Error has occured during the operation.");
      return res.status(200).json(result);
    }
  );
});

// config
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
