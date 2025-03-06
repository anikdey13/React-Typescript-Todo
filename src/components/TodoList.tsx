import { useTodos } from "../store/todos";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

export const TodoList = () => {
  const { todos, handleCompletedTask, handleDeleteTask } = useTodos();

  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  let filteredData = todos;
  if(todosData === "active"){
    filteredData = todos.filter((task)=> !task.completed)
  }
  if(todosData === "completed"){
    filteredData = todos.filter((task)=> task.completed)
  }
  
  return (
    <>
      <ul>
        {filteredData.map((todo,idx) => {
          const isCompleted = todo.completed;
          return (
            <li
              key={todo.id}
              className="flex justify-between px-4 py-2 bg-[#FFF] text-[#2D3748] rounded-sm mb-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
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
                <MdDelete size={25} color="red" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
