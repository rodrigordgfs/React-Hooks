import { useContext } from "react";
import { GlobalContext } from "../../../Contexts/AppContext";

export default function H1() {
  const context = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = context;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
}
