import { Link, useSearchParams } from "react-router-dom"
import '../App.css'
export const TodoListToggle = () => {
  const [searchParams] = useSearchParams();
  let urlData = searchParams.get("todos");
  
  return (
    <nav className="flex justify-between border-b-2 mb-4 p-2">
        <Link to="/" className={`px-4 py-2 ${urlData === null ? "bg-green-500 rounded-sm text-white" : ""}`}>All</Link>
        <Link to="/?todos=active" className={`px-4 py-2 ${urlData === "active" ? "bg-green-500 rounded-sm text-white" : ""}`}>Active</Link>
        <Link to="/?todos=completed" className={`px-4 py-2 ${urlData === "completed" ? "bg-green-500 rounded-sm text-white" : ""}`}>Completed</Link>
    </nav>
  )
}
