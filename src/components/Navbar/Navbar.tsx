import Logo from "../../assets/Logo";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const Navbar = () => {
  const { setCharacter } = useContext(SearchContext);

  const onChangeHandler = (e: string | any) => {
    const timer = setTimeout(() => {
      setCharacter(e.target.value);
    }, 1000);
  };
  return (
    <div>
      <div className="mt-2 ml-2 grid grid-cols-4 gap-4   ">
        <Logo />
        <input
          type="text"
          id="first_name"
          onChange={onChangeHandler}
          className="bg-gray-50 float-right w-45 mr-2  col-end-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
