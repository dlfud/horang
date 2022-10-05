import React from "react";

const BoardListItems = ({ board }) => {
  const { id, title, content, create_date } = board;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{content}</th>
      <th>{create_date}</th>
    </tr>
  );
};

export default BoardListItems;
