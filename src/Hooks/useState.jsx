import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((prevState) => ++prevState);

  const handleDecrement = () => setCounter((prevState) => --prevState);

  return (
    <div>
      <h2 id="usestate">useState</h2>
      <p>Counter: {counter}</p>
      <button disabled={counter === 10} onClick={handleIncrement}>
        Incrementar
      </button>
      <button disabled={counter === 0} onClick={handleDecrement}>
        Decrementar
      </button>
    </div>
  );
}
