const mysql = require("mysql");
require("dotenv").config();
const nodeUtil = require("util");

const db = mysql.createPool({
   connectionLimit: 10,
   host: process.env.RDS_HOST,
   user: process.env.RDS_USER,
   password: process.env.RDS_PASSWORD,
   database: "tonights_specials_app",
});

db.query = nodeUtil.promisify(db.query);

module.exports = db;
