
const { application } = require('express');
const express = require('express');
const app = express();
const test = require('.//Router/test');
// const PHRASE_API_HEAD = "http://localhost:5000/horang";

app.use('/api', test);

const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});


// app.use('/babo', )
// const phraseRandom = async () => {
//   const data = await fetch(`${PHRASE_API_HEAD}/test`);
//   const json = await data.json();
// };