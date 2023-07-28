import React from "react";

const State = () => {
  const [text, setText] = React.useState("HIMANSHI");

  const textWrite = (event) => {
    const newValue = event.target.value;
    setText(newValue);
  };
  return (
    <div>
      <input onChange={textWrite} type="text" placeholder="write something" />
      {text}
    </div>
  );
  //   const [counter, setCounter] = React.useState(0);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  //   return (
  //     <div>
  //       {counter}
  //       <button onClick={increment}>INCREMENT</button>
  //     </div>
  //   );
};

export default State;
