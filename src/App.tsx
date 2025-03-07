import { Todo } from "./components/Todo"
import { useTodos } from "./store/todos"

export const App = () => {
  
 const {darkMode} = useTodos();
  return (
    
    <section className={darkMode ? "dark": ""}>
      <Todo/>
    </section>
  )
}
