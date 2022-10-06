import React from "react";
import { Link } from "react-router-dom";

const BoardListItems = ({ board }) => {
  const { id, title, content, create_date } = board;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{content}</th>
      <th>{create_date}</th>
      <th>{<Link to={`/update/${id}`}>update</Link>}</th>
    </tr>
  );
};

export default BoardListItems;
