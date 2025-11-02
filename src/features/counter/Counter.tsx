import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementByAmount } from "./CounterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span>{count}</span>
        <button
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
}
