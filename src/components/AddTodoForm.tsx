import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";

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
      <form onSubmit={handleFormSubmit}>
        <input type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Task name"
          className="border-1 p-2 rounded-sm mr-2"
        />
        <button type="submit"
          className="border-1 py-2 px-4 rounded-sm bg-green-500 text-white"
        >Add</button>
      </form>
    </section>
  )
}
