require("dotenv").config();

const mysql = require("mysql2");

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  JWT_SALTROUNDS,
  JWT_SECRET,
} = process.env;

const db = mysql.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = {
  db,
  jwt_rounds: parseInt(JWT_SALTROUNDS),
  jwt_secret: JWT_SECRET,
};
