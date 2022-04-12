import React from "react";
import "./styles.css";

export default function App() {
  const [hasArrived, setHasArrived] = React.useState(false);
  function handleClick() {
    setHasArrived(!hasArrived);
  }
  return (
    <div className="App">
      {!hasArrived && <h1>Click when you arrive</h1>}
      {hasArrived && <h1>Click when you leave</h1>}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
