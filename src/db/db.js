const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "crud",
  password: "3164",
  port: 5432,
});
/*const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "crud",
  password: "3164",
  port: 5432,
});*/
module.exports = pool;
