import { AddTodoForm } from "./AddTodoForm";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { TodoListToggle } from "./TodoListToggle";

export const Todo = () => {
  return (
    <section className="h-screen bg-[#F5F7FA] dark:bg-[#0b192cfa] dark:text-white transition-colors">
      <Header />
      <div className="w-[80%] m-auto">
        <TodoListToggle/>
        <AddTodoForm />
        <TodoList />
      </div>
    </section>
  );
};
