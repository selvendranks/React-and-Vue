import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const increment = () => {
    dispatch({ type: "increment", times: 5 });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {showCounter && (
        <div>
          <button onClick={increment}>increment</button>
          <button onClick={increment}>increment by 5</button>
          <button onClick={decrement}>decrement</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
