import React, { useCallback, useState } from "react";
import p from "prop-types";

const Button = React.memo(({ onIncrement }) => {
  return <button onClick={() => onIncrement(10)}>Incrementar</button>;
});

Button.prototype = {
  onIncrement: p.func,
};

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback((num) => {
    setCounter((prevState) => prevState + num);
  }, []);

  return (
    <div>
      <h2 id="usecallback">useCallback</h2>
      <p>Counter: {counter}</p>
      <Button onIncrement={handleIncrement} />
    </div>
  );
}
