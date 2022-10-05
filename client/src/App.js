import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BoardList from "./component/BoardList";
import {NavLink} from "react-router-dom";


function App() {
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
    <div className="App">
      <BoardList boards={boards}/>
      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/create'>생성</NavLink>
    </div>
  );
}

export default App;
