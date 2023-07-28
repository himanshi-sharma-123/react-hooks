import React from "react";

const Layout = () => {
  const inputRef = React.useRef(null);

  React.useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  React.useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <input ref={inputRef} value="HIMANSHI" />
    </div>
  );
};

export default Layout;
