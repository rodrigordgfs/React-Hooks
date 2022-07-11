import { useReducer } from "react";

const INCREMENT = "increment";
const REVERSE = "reverse";

const globalState = {
  title: "Counter",
  body: "Click Me",
  counter: 1,
};

const reducer = (state, action) => {
  const { title, counter } = state;
  const { incrementNumber } = action.payload;
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: counter + incrementNumber };
    case REVERSE:
      return { ...state, title: title.split("").reverse().join("") };
    default:
  }
  return { ...state };
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h2 id="usereducer">useReducer</h2>
      <p>
        {title} {counter}
      </p>
      <button
        onClick={() =>
          dispatch({ type: INCREMENT, payload: { incrementNumber: 5 } })
        }
      >
        {body}
      </button>
      <button onClick={() => dispatch({ type: REVERSE })}>Revese</button>
    </div>
  );
}
