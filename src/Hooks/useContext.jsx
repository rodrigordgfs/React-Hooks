import React, { useContext, useState } from "react";

const initialGlobalState = {
  title: "Counter",
  body: "Click Me",
  counter: 1,
};

const GlobalContext = React.createContext();

const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = context;
  return (
    <p
      onClick={() => {
        setContextState((previousState) => ({
          ...previousState,
          counter: previousState.counter * 2,
        }));
      }}
    >
      {body}
    </p>
  );
};

export default function UseContext() {
  const [contextState, setContextState] = useState(initialGlobalState);
  return (
    <div>
      <h2 id="usecontext">useContext</h2>
      <GlobalContext.Provider value={{ contextState, setContextState }}>
        <Div />
      </GlobalContext.Provider>
    </div>
  );
}
