import React from "react";

const Ref = () => {
  const inputRef = React.useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
    console.log(inputRef);
  };
  return (
    <div>
      <h1>Himanshi</h1>
      <input type="text" placeholder="write here" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default Ref;
