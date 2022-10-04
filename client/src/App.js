import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BoardInput from "./component/BoardInput";

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const boards = await axios({
        url: "http://localhost:3000/api",
        method: "GET",
      });
      console.log("boards", boards);
      setBoard(boards.data);
    };

    getData();
  }, []);

  console.log(board);
  const nextId = useRef(4);

  return (
    <div className="App">
      {board[0].title}
      {board[0].create_date}

      <BoardInput board={board} setBoard={setBoard} nextId={nextId} />
    </div>
  );
}

export default App;
