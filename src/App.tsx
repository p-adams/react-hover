import { useState } from "react";
import "./App.css";
import HoverTimer from "./HoverTimer";

function App() {
  const [timer, setTimer] = useState(0);

  return (
    <>
      <div className="hover-timer-wrapper">
        <h4>time elapsed: {timer}</h4>
        <HoverTimer />
      </div>
    </>
  );
}

export default App;
