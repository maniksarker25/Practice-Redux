import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./components/HandleState/reducers/CounterReducer";
import todosReducer from "./components/HandleState/reducers/TodosRuducer";
import thunk from "redux-thunk";

// const store = createStore(counterReducer);
// const store = createStore(todosReducer,applyMiddleware(thunk))
const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todosReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;