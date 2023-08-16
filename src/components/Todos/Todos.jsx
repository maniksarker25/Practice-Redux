import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../HandleState/actions/TodosAction";


const Todos = () => {
    const {isLoading,todos,error} = useSelector(state=>state.todos)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos());
    },[dispatch])
    return (
        <div>
            <h1>Todos app</h1>
            {isLoading && "Loading"}
            {error && <p>{error.message}</p>}

            <div>
                {
                    todos.map((todo,index)=><p key={index}>{todo.title}</p>)
                }
            </div>

        </div>
    );
};

export default Todos;