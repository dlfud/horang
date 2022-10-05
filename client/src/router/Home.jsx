import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BoardList from "../component/BoardList";
import Layout from "../layout/Layout";

const Home = ({}) => {
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
  }, []);

  console.log(boards);
  const nextId = useRef(4);

  return (
    <Layout>
      <div>
        <Link to="/create">Create</Link>
        <BoardList boards={boards} />
      </div>
    </Layout>
  );
};

export default Home;
