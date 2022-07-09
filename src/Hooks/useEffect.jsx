import { useEffect, useState } from "react";

export default function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleIncrement = () => setCounter((prevState) => ++prevState);
  const handleDecrement = () => setCounter((prevState) => --prevState);
  const handleIncrement2 = () => setCounter2((prevState) => ++prevState);
  const handleDecrement2 = () => setCounter2((prevState) => --prevState);

  function eventFn() {
    console.log("H2 CLICADO");
  }

  useEffect(() => {
    document.getElementById("useeffect").addEventListener("click", eventFn);
    return () => {
      document
        .getElementById("useeffect")
        .removeEventListener("click", eventFn);
    };
  }, []);

  useEffect(() => {
    console.log("Counter1: ", counter, "Counter2: ", counter2);
  }, [counter, counter2]);

  return (
    <div>
      <h2 id="useeffect">useEffect</h2>
      <p>Counter: {counter}</p>
      <button disabled={counter === 10} onClick={handleIncrement}>
        Incrementar
      </button>
      <button disabled={counter === 0} onClick={handleDecrement}>
        Decrementar
      </button>
      <p>Counter2: {counter2}</p>
      <button disabled={counter2 === 10} onClick={handleIncrement2}>
        Incrementar
      </button>
      <button disabled={counter2 === 0} onClick={handleDecrement2}>
        Decrementar
      </button>
    </div>
  );
}
