import { useTodos } from "../store/todos";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";

export const TodoList = () => {
  const { todos, handleCompletedTask, handleDeleteTask } = useTodos();
  const filteredData = todos;
  return (
    <>
      <ul>
        {filteredData.map((todo,idx) => {
          const isCompleted = todo.completed;
          return (
            <li
              key={todo.id}
              className="flex justify-between px-4 py-2 bg-black text-white rounded-sm mb-4"
            >
              <div className="flex gap-2">
                <button onClick={() => handleCompletedTask(todo.id)}>
                  {isCompleted ? (
                    <RiCheckboxCircleLine size={25} />
                  ) : (
                    <RiCheckboxBlankCircleLine size={25} />

                  )}
                </button>

               <span className={isCompleted ? `line-through`: ""}> {todo.task}</span>
              </div>
              <button onClick={()=> handleDeleteTask(idx)}>
                <MdDelete size={25} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
