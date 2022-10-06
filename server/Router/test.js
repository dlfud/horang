const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const router = express.Router();

//조회
router.get("/", async (req, res) => {
  let conn = await db.getConnection();
  const [boardRow] = await conn.query(`SELECT * FROM secretPost`);
  console.log(boardRow);
  conn.release();

  if (boardRow === undefined) {
    res.status(404).json({
      resultCode: "F-1",
      msg: "404 not found",
    });
    return;
  }
  res.send(boardRow);
});

//생성
router.post("/create", async (req, res) => {
  const { title, content } = req.body;
  if (!title) {
    res.status(400).json({
      resultCode: "F-1",
      msg: "title required",
    });
    return;
  }
  if (!content) {
    res.status(400).json({
      resultCode: "F-1",
      msg: "content required",
    });
    return;
  }

  let conn = null;
  try {
    conn = await db.getConnection();
    await conn.query(`INSERT INTO secretPost SET title = ?, content = ?`, [
      title,
      content,
    ]);

    conn.release();
  } catch (err) {
    console.error("insert error!");
    console.error(err);
    conn.release();
  }
  res.send("success");
});

//수정
router.post("/update", async (req, res) => {
  const { id, title, content } = req.body;
  if (!title) {
    res.status(400).json({
      resultCode: "F-1",
      msg: "title required",
    });
    return;
  }
  if (!content) {
    res.status(400).json({
      resultCode: "F-1",
      msg: "content required",
    });
    return;
  }

  let conn = null;
  try {
    conn = await db.getConnection();
    await conn.query(
      `UPDATE secretPost SET title = ?, content = ? WHERE id = ?`,
      [title, content, id]
    );

    conn.release();
  } catch (err) {
    console.error("update error!");
    console.error(err);
    conn.release();
  }
  res.send("success");
});

module.exports = router;
