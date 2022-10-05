import axios from "axios";
import React from "react";
import { useState } from "react";

const BoardInput = ({ boards, setBoards, nextId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log("들어옴");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await axios({
            url: "http://localhost:3000/api/create",
            method: "POST",
            data: { title, content },
          });
          console.log(title, content);
          setBoards(data.data);
          nextId.current++;
          setBoards("");
        }}
      >
        <label className="label">
          <span className="label-text-alt">게시글 등록</span>
        </label>
        <input
          type="text"
          placeholder="title"
          className="input input-bordered w-full max-w-xl"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="content"
          className="input input-bordered w-full max-w-xl"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button>생성</button>
      </form>
    </div>
  );
};

export default BoardInput;
