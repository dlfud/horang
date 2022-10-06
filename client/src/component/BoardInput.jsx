import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardInput = ({}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createBoard = async (e) => {
    e.preventDefault();
    const doCreate = await axios({
      url: "http://localhost:3000/api/create",
      method: "POST",
      data: {
        title,
        content,
      },
    });
    if (doCreate.data === "success") {
      navigate("/");
    } else {
      alert("통신실패!");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => createBoard(e)}>
        <label className="label">
          <span className="label-text-alt">게시글 등록</span>
        </label>
        <div>
          <p>제목 : </p>
          <input
            type="text"
            placeholder="title"
            className="input input-bordered w-full max-w-xl"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <p>내용 : </p>
          <input
            type="text"
            placeholder="content"
            className="input input-bordered w-full max-w-xl"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">생성</button>
        </div>
      </form>
    </div>
  );
};

export default BoardInput;
