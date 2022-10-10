import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("app");

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((showPara) => !showPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((allowToggle) =>!allowToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}></DemoOutput>
      <Button onClick={toggleParaHandler}>Submit</Button>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
    </div>
  );
}

export default App;
