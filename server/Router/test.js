// import express from "express"; // import로 가져옴
// import mysql from "mysql2/promise";
// import cors from "cors";

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "sbsst", // 사용자이름
//   password: "sbs123414", // 비번
//   database: "horang", // 데이터 베이스
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//   dateStrings: true, // 날짜 시간 이뿌게
// });

// app.use(express.json());



// const corsOptions = {
//   origin: "https://cdpn.io",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors());



const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ test: "어쭬" });
});

// app.get("/", async(req, res) => {
//   const[[horangRow]] = await pool.query(
//       `SELECT * FROM secretPost`
//   )

//   res.send({test: horangRow})  
// })

module.exports = router;


