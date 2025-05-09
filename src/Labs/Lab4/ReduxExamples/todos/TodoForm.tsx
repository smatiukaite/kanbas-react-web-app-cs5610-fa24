import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <input
                defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} className="round-2" />

            <button onClick={() => dispatch(addTodo(todo))}
                className="wd-add-todo-click btn btn-success me-2 ms-2"> Add </button>
            <button onClick={() => dispatch(updateTodo(todo))}
                className="wd-update-todo-click btn btn-warning"> Update </button>

        </li>
    );
}