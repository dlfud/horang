const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const router = express.Router();

// router.get("/", (req, res) => {
// res.send({ test: "어쭬" });
// });

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
  //   console.error("select error!");
  //   console.error(err);

  res.send(boardRow);
});

router.post("/create", async (req, res) => {
  const {title, content} = req.body;

  if(!title){
    res.status(400).json({
      resultCode:"F-1",
      msg:"title required",
    });
    return;
  }
  if(!content){
    res.status(400).json({
      resultCode:"F-1",
      msg:"title required",
    });
    return;
  }


  let conn = null;
  try {
    conn = await db.getConnection();
    await conn.query(`INSERT INTO secretPost SET title = ?, content = ?`, [title, content]);

    conn.release();
  } catch (err) {
    console.error("insert error!");
    console.error(err);
    conn.release();
  }
  // res.send("님 성공함");
  res.json({
    resultCode:"S-1",
    msg:"성공",
    data: newBoardRow,
  });
});

module.exports = router;
