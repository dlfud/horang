import React from "react";
import BoardInput from "../component/BoardInput";
import Layout from "../layout/Layout";

const Create = ({ boards, setBoards, nextId }) => {
  return (
    <Layout>
      <div>
        <BoardInput boards={boards} setBoards={setBoards} nextId={nextId} />
      </div>
    </Layout>
  );
};

export default Create;
