import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import axios from "axios";

const BoardUpdate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateBoard = async (e) => {
    e.preventDefault();
    const doUpdate = await axios({
      url: "http://localhost:3000/api/update",
      method: "POST",
      data: {
        id,
        title,
        content,
      },
    });
    if (doUpdate.data === "success") {
      navigate("/");
    } else {
      alert("통신실패!");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => updateBoard(e)}>
        <div>
          <p>제목 : </p>
          <input
            type="text"
            value={title}
            placeholder="title"
            className="input input-bordered w-full max-w-xl"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <p>내용 : </p>
          <input
            type="text"
            value={content}
            placeholder="content"
            className="input input-bordered w-full max-w-xl"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">전송</button>
        </div>
      </form>
    </div>
  );
};

export default BoardUpdate;
