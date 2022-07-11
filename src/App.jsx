import UseCallback from "./Hooks/useCallback";
import UseContext from "./Hooks/useContext";
import UseContextUseReducer from "./Hooks/useContextUseReducer";
import UseEffect from "./Hooks/useEffect";
import UseMemo from "./Hooks/useMemo";
import UseReducer from "./Hooks/useReducer";
import UseRef from "./Hooks/useRef";
import UseState from "./Hooks/useState";

export default function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <UseState />
      <UseEffect />
      <UseCallback />
      <UseMemo />
      <UseRef />
      <UseContext />
      <UseReducer />
      <UseContextUseReducer />
    </div>
  );
}
