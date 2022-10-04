import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [babo, setBabo] = useState([]);
  const callApi = async () => {
    await axios.get("/api").then((res) => {
      console.log("메롱", res);
      if (res.data.ok === true) {
        console.log(res.data.result);
        setBabo(res.data.result);
      } else {
        console.log("데이터 없는데~");
      }
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      {babo[2].title}
      {babo[2].create_date}
    </div>
  );
}

export default App;
