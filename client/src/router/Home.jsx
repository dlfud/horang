import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BoardInput from "../component/BoardInput";
import BoardList from "../component/BoardList";
import Layout from "../layout/Layout";

const Home = ({}) => {
  const[delActivity, setDelActivity] = useState("False")
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const boards = await axios({
        url: "http://localhost:3000/api",
        method: "GET",
      });
      console.log("boards", boards);
      setBoards(boards.data);
    };

    getData();
  }, [delActivity]);

  console.log(boards);
  const nextId = useRef(4);

  return (
    <Layout>
      <div>
        <BoardList boards={boards} setBoards={setBoards} setDelActivity={setDelActivity}/>
      </div>
    </Layout>
  );
};

export default Home;
