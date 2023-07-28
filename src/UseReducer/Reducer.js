import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLESHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    showText: true,
  });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        INCREMENT
      </button>
      {state.showText && <h1>This is a text</h1>}
    </div>
  );
  //   const [count, setCount] = React.useState(0);
  //   const [text, setText] = React.useState(true);
  //   return (
  //     <div>
  //       <h1>{count}</h1>
  //       <button
  //         onClick={() => {
  //           setCount(count + 1);
  //           setText(!text);
  //         }}
  //       >
  //         INCREMENT
  //       </button>
  //       {text && <h1>This is a text</h1>}
  //     </div>
  //   );
};

export default Reducer;
