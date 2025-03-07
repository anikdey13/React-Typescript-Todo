import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useTodos } from "../store/todos";


export const Header = () => {
  const {darkMode, toggleDarkMode} = useTodos();


  return (
    <>
      <div
        className="flex justify-between items-center mb-4 px-8 py-4 text-bold text-center backdrop-blur-xs dark:bg-[#0B192C]

 text-black font-semibold shadow-sm"
      >
        <h1 className="dark:text-white">Task Manager</h1>
        <div onClick={toggleDarkMode} className="bg-white text-black p-2 rounded-full shadow-md">
            {darkMode ? <MdOutlineWbSunny size={22} /> : <FaRegMoon size={22}/>
        }
          
        </div>
      </div>
    </>
  );
};
