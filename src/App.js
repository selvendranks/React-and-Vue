import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log("app");

  const toggleParaHandler = useCallback(() => {
    setShowPara((showPara)=>!showPara);
  },[]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}></DemoOutput>
      <Button onClick={toggleParaHandler}>Submit</Button>
    </div>
  );
}

export default App;
