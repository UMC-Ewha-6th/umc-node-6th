import mysql from 'mysql2';

const db_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  database: "umc_node_6th",
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully!");
    });
  },
};