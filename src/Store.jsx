import { createStore } from "redux";
import counterReducer from "./components/HandleState/reducers/CounterReducer";

const store = createStore(counterReducer);

export default store;