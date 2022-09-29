import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [babo,setBabo] = useState(""); 
  const callApi = async()=>{
    axios.get("/api").then((res)=>{setBabo(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);
  
  return (
    <div className="App">
	    {babo}
    </div>
  );
}

export default App;