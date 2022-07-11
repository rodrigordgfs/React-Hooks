import { useContext } from "react";
import { GlobalContext } from "../../../Contexts/AppContext";

export default function P() {
  const context = useContext(GlobalContext);
  const {
    state: { body },
    setState,
  } = context;
  return (
    <p
      onClick={() => {
        setState((previousState) => ({
          ...previousState,
          counter: previousState.counter * 2,
        }));
      }}
    >
      {body}
    </p>
  );
}
