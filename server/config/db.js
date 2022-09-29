const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "sbsst", // 사용자이름
  password: "sbs123414", // 비번
  database: "horang", // 데이터 베이스
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true, // 날짜 시간 이뿌게
});

module.exports = db;
