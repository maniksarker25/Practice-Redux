import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../HandleState/actions/CounterAction";


const Counter = () => {
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(incrementCounter())
    }
    const handleDecrement = ()=>{
        dispatch(decrementCounter())
    }
    const handleReset = ()=>{
        dispatch(resetCounter())
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;