const express = require("express");
const router = express.Router();
const { db } = require("../config");

// Get all gliders to sell
router.get("/gliders", (req, res) => {
  db.query(
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
router.get("/gliders/:idGlider", (req, res) => {
  db.query(
    "SELECT image, image2, image3, model, year, price, resume, users.name, users.email FROM gliders JOIN users ON users.id=gliders.users_id WHERE gliders.id=?",
    [req.params.idGlider],
    (err, result) => {
      if (err)
        return res.status(500).send("Error has occured during the operation.");
      return res.status(200).json(result);
    }
  );
});

// Post a glider
router.post("/gliders", (req, res) => {
  const { image, model, year, resume, price, location, users_id } = req.body;
  db.query(
    "INSERT INTO gliders(image, model, year, resume, price, location, users_id) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [image, model, year, resume, price, location, users_id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error posting a glider");
      } else {
        res.status(200).send("Successfully added");
      }
    }
  );
});

// search glider by model
router.get("/search", (req, res) => {
  const { include } = req.query;
  db.query(
    `SELECT * FROM gliders WHERE model LIKE '%${include}%'`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

module.exports = router;
