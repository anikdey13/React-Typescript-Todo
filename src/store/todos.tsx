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
  handleDeleteTask: (idx:number) => void;
};

// context
export const todoscontext = createContext<TodosContext | null>(null);


//Provider
export const TodosProvider = ({ children }: TodosProviderProps) => {

  const [todos, setTodos] = useState<Todo[]>([]);

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
      return newTodos;
      
    });
    
  };

  const handleCompletedTask = (id:string) =>{
    setTodos((prev)=>
      prev.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  } 

  const handleDeleteTask = (idx:number) => {
    setTodos(todos.filter((_,i)=> i !== idx))
  }
  

  return (
    <todoscontext.Provider value={{ todos, handleAddTask, handleCompletedTask, handleDeleteTask }}>
      {children}
    </todoscontext.Provider>
  );
};


// consumer

export const useTodos = () =>{
    const todosConsumer = useContext(todoscontext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer;
}
