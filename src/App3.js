import React, { useState, useEffect } from "react";

/*const App3 = () => {
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
};*/

const useTitle = (value) => {
  const [title, setTitle] = useState(value);
  const getTitle = () => {
    const tagTitle = document.querySelector("title");
    tagTitle.innerText = title;
  };
  useEffect(getTitle, [title]);
  return setTitle;
};

const App3 = () => {
  const oldTitle = useTitle("Loadddding");
  setTimeout(() => oldTitle("home"), 5000);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App3;
