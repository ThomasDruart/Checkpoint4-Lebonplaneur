const express = require("express");
const connection = require("./config");
const cors = require("cors");

const port = 5050;
const app = express();

// config
app.use(express.json());
app.use(cors());

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
    `SELECT id, image, model, year, price, location FROM gliders`,
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
app.get("/gliders/:idGlider", (req, res) => {
  connection.query(
    "SELECT image, image2, image3, model, year, price, resume, users.name, users.email FROM gliders JOIN users ON users.id=gliders.users_id WHERE gliders.id=?",
    [req.params.idGlider],
    (err, result) => {
      if (err)
        return res.status(500).send("Error has occured during the operation.");
      return res.status(200).json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
