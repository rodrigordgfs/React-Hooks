import { useEffect, useRef } from "react";
import { useState } from "react";

const useCounter = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

export default function CustomHook() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(100);
  const [increment, setIncrement] = useState(100);

  useCounter(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, delay);

  return (
    <div>
      <h2>customHook</h2>
      <p>Couter: {counter}</p>
      <p>Delay: {delay}</p>
      <button
        onClick={() => {
          setDelay((prevDelay) => prevDelay + increment);
        }}
      >
        + {increment}
      </button>
      <button
        onClick={() => {
          setDelay((prevDelay) => prevDelay - increment);
        }}
      >
        - {increment}
      </button>
      <input
        type="number"
        value={increment}
        onChange={(e) => setIncrement(Number(e.target.value))}
      />
    </div>
  );
}
