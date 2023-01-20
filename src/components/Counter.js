import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const increase = () => {
    dispatch(counterActions.increase(5)); //default payload:
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {showCounter && (
        <div>
          <button onClick={increment}>increment</button>
          <button onClick={increase}>increment by 5</button>
          <button onClick={decrement}>decrement</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
