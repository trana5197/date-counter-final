import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({
    step: 1,
    count: 0,
  });

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + counter.count);

  function handleStepChange(e) {
    setCounter((curCounter) => {
      return { ...curCounter, step: +e.target.value };
    });
  }

  function handleCountDecrease() {
    setCounter((curCounter) => {
      return { ...curCounter, count: curCounter.count - curCounter.step };
    });
  }

  function handleCountincrease() {
    setCounter((curCounter) => {
      return { ...curCounter, count: curCounter.count + curCounter.step };
    });
  }

  function handleCountChange(e) {
    setCounter((curCounter) => {
      return { ...curCounter, count: +e.target.value };
    });
  }

  function handleReset() {
    setCounter({ step: 1, count: 0 });
  }

  return (
    <>
      <div className="counter">
        <input
          className="step"
          type="range"
          min="0"
          max="10"
          value={counter.step}
          onChange={handleStepChange}
        />
        <span>
          <strong>Step: {counter.step}</strong>
        </span>
      </div>
      <div className="counter">
        <button onClick={handleCountDecrease}>-</button>
        <input
          className="count"
          type="number"
          value={counter.count}
          onChange={handleCountChange}
        />
        <button onClick={handleCountincrease}>+</button>
      </div>
      <div>
        <h3>
          <span>
            {counter.count === 0
              ? "Today is "
              : counter.count > 0
              ? `${counter.count} days from today is `
              : `${Math.abs(counter.count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
      <div>
        {counter.count !== 0 || counter.step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </>
  );
}
