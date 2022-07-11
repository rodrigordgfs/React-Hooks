import { createContext, useContext, useReducer, useRef } from "react";
import P from "prop-types";

// actions.js
export const actions = {
  INCREMENT: "INCREMENT",
};

// data.js
export const globalState = {
  title: "Counter",
  body: "Click Me",
  counter: 1,
};

// reducer.js
export const reducer = (state, action) => {
  const { incrementNumber } = action.payload;
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + incrementNumber };
    default:
      break;
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const incrementCounter = (payload) => {
    dispatch({ type: actions.INCREMENT, payload });
  };
  return (
    <Context.Provider value={{ state, incrementCounter }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <p>
        {context.state.title} {context.state.counter}
      </p>
      <input type="number" placeholder="Increment Number" ref={inputRef} />
      <button
        onClick={() =>
          context.incrementCounter({
            incrementNumber: Number(inputRef.current.value),
          })
        }
      >
        {context.state.title}
      </button>
    </>
  );
};

// App.jsx
export default function UseContextUseReducer() {
  return (
    <div>
      <h2 id="UseContextUseReducer">useContextUseReducer</h2>
      <AppContext>
        <H1 />
      </AppContext>
    </div>
  );
}
