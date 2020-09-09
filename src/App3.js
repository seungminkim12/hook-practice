import React, { useState, useEffect, useRef } from "react";

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
/*
const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App3 = () => {
  const titleUpdater = useTitle("Loadiiiiing");
  setTimeout(() => titleUpdater("home"), 3000);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
*/

const useClick = (onClick) => {
  const element = useRef;
  console.log();
};

const App3 = () => {
  const title = useClick();
  return (
    <div>
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App3;
