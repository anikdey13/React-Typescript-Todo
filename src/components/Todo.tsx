import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { TodoListToggle } from "./TodoListToggle";

export const Todo = () => {
  return (
    <section className="border-2 p-4 h-screen">
      <div className="w-[80%] m-auto">
        <div className="mb-4 text-center">ToDo - App</div>
        <TodoListToggle/>
        <AddTodoForm />
        <TodoList />
      </div>
    </section>
  );
};
