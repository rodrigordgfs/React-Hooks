import { AppContext } from "../../Contexts/AppContext";
import Div from "./Div";

export default function UseContext() {
  return (
    <div>
      <h2 id="usecontext">useContext</h2>
      <AppContext>
        <Div />
      </AppContext>
    </div>
  );
}
