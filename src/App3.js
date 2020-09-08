import React, { useState, useEffect } from "react";

const App3 = () => {
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);
  const sayHello = () => {
    console.log("hello");
  };
  useEffect(() => {
    sayHello();
  }, [number]);
  return (
    <div className="App2">
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default App3;
