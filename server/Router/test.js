const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const router = express.Router();

// router.get("/", (req, res) => {
// res.send({ test: "어쭬" });
// });

router.get("/", async (req, res) => {
  const sql = `SELECT * FROM secretPost`;
  let conn = await db.getConnection();
  const [boardRow] = await conn.query(sql);
  console.log(boardRow);
  conn.release();

  if (boardRow === undefined) {
    res.status(404).json({
      resultCode: "F-1",
      msg: "404 not found",
    });
    return;
  }
  //   console.error("select error!");
  //   console.error(err);

  res.send(boardRow);
});

router.post("/create", async (req, res) => {
  let conn = null;
  try {
    const sql = `INSERT INTO secretPost SET title=${req.title}, content = ${req.content}`;
    conn = await db.getConnection();
    await conn.query(sql);

    conn.release();
  } catch (err) {
    console.error("insert error!");
    console.error(err);
    conn.release();
  }
  res.send("님 성공함");
});

module.exports = router;
