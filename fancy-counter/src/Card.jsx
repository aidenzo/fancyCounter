import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5 ? true : false;

  const increment = (event) => {
    setCount((pre) => (pre >= 5 ? pre : pre + 1));
    event.currentTarget.blur();
  };
  const decrement = (event) => {
    setCount((pre) => (pre > 0 ? pre - 1 : pre));
    event.currentTarget.blur();
  };
  const reset = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        increment();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count value={count} />
      <ResetButton onClick={reset} />
      <CountButtons
        increment={increment}
        decrement={decrement}
        locked={locked}
      />
    </div>
  );
}
