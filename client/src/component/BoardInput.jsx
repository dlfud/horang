import axios from "axios";
import React from "react";
import { useState } from "react";

const BoardInput = ({ board, setBoard, nextId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await axios({
            url: "http://localhost:3000/create",
            method: "POST",
            data: { title, content },
          });
          setBoard(data.data);
          nextId.current++;
          setBoard("");
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
      </form>
    </div>
  );
};

export default BoardInput;
