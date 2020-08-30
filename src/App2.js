import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App2 = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App2">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App2;
