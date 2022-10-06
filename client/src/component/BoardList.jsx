import React from "react";
import BoardListItems from "./BoardListItems";

const BoardList = ({ boards }) => {
  console.log(boards);
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>createDate</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board, index) => (
            <BoardListItems key={index} board={board} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
