import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";
import { CiSquarePlus } from "react-icons/ci";


export const AddTodoForm = () => {
  const[todo, setTodo] = useState("");
  const {handleAddTask} = useTodos();
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    handleAddTask(todo);
    setTodo("");
  }
  return (
    <section className="mb-4">
      <form onSubmit={handleFormSubmit} className=" flex justify-between">
        <input type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Task name"
          className="p-2 rounded-sm mr-2 w-4/5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-white text-[#000]"
        />
        <button type="submit"
          className="border-1 py-2 px-4 rounded-sm bg-green-500 text-white"
        ><CiSquarePlus size={25} />
</button>
      </form>
    </section>
  )
}
