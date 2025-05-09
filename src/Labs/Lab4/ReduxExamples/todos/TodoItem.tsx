import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                className="wd-delete-todo-click btn btn-danger me-2 ms-5"> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}
                className="wd-set-todo-click btn btn-primary me-2"> Edit </button>
        </li>
    );
}