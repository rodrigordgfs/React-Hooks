import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    if (counter !== 10) {
      setCounter((prevState) => ++prevState);
    }
  }

  function handleDecrement() {
    if (counter !== 0) {
      setCounter((prevState) => --prevState);
    }
  }

  return (
    <div className="usestate">
      <h2>useState</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
}
