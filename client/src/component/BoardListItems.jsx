import axios from "axios";
import React from "react";
import { Link} from "react-router-dom";

const BoardListItems = ({ board, setBoards, setDelActivity }) => {
  const { id, title, content, create_date } = board;

  const deleteBoard = async (id) => {
    const doDelete = await axios({
      url: "http://localhost:3000/api/delete",
      method: "DELETE",
      data: { id }
    });
    if (doDelete.data === "success") {
      setDelActivity("true"+id);
    } else {
      alert("통신에러!");
    }
  }

  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{content}</th>
      <th>{create_date}</th>
      <th>{<Link to={`/update/${id}`}>update</Link>}</th>
      <th>{<button type="button" onClick={() => { deleteBoard(id); }}>delete</button>}</th>
    </tr>
  );
};

export default BoardListItems;
