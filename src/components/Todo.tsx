import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { TodoListToggle } from "./TodoListToggle";

export const Todo = () => {
  return (
    <section className="h-screen bg-[#F5F7FA]">
      <div className="mb-4 p-4 text-bold text-center bg-green-700 text-white font-semibold">Task Manager</div>
      <div className="w-[80%] m-auto">
        <TodoListToggle/>
        <AddTodoForm />
        <TodoList />
      </div>
    </section>
  );
};
