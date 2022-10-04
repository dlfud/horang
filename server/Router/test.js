const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const router = express.Router();

// router.get("/", (req, res) => {
// res.send({ test: "어쭬" });
// });

router.get("/", async (req, res) => {
  let rt = {
    ok: false,
    msg: "",
    result: null,
  };
  let conn = null;
  try {
    const sql = `SELECT * FROM secretPost`;
    conn = await db.getConnection();
    const [result] = await conn.query(sql);

    rt.ok = true;
    rt.msg = "어쩌라고";
    rt.result = result;

    conn.release();
  } catch (err) {
    console.error("select error!");
    console.error(err);
    rt.msg = "select error";
    rt.result = err.message;

    conn.release();
  }
  console.log(rt);
  // res.send({ test: "success" });
  res.send(rt);
});


router.post("/create", async (req, res) =>{
  let conn = null;
  try{
    const sql = `INSERT INTO secretPost SET title=${req.title}, content = ${req.content}`;
    conn = await db.getConnection();
    await conn.query(sql);

    conn.release();
  } catch(err){
    console.error("insert error!");
    console.error(err);
    conn.release();
  }
  res.send("님 성공함");
});

module.exports = router;
