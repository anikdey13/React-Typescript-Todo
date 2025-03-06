import { createContext, ReactNode, useContext, useState } from "react";

// Types
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodosContext = {
  todos: Todo[];
  handleAddTask: (task: string) => void;
  handleCompletedTask: (id: string) => void;
  handleDeleteTask: (idx: number) => void;
};

// context
export const todoscontext = createContext<TodosContext | null>(null);

//Provider
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(()=>{
    try {
      const newTodos = localStorage.getItem("todos") || "[]"
      return JSON.parse(newTodos) as Todo[]
    } catch (error) {
      return []
    }
  });

  const handleAddTask = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleCompletedTask = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleDeleteTask = (idx: number) => {
    setTodos((prev)=>{
      const newTodos = prev.filter((_,i)=> i !== idx);
      localStorage.setItem("todos",JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todoscontext.Provider
      value={{ todos, handleAddTask, handleCompletedTask, handleDeleteTask }}
    >
      {children}
    </todoscontext.Provider>
  );
};

// consumer

export const useTodos = () => {
  const todosConsumer = useContext(todoscontext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
};
