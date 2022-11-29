// Icon
import Logo from "../../assets/Logo";
import { useNavbar } from "./useNavbar";

const Navbar = () => {
  const onChangeHandler = useNavbar();

  return (
    <div className="flex w-[100%] justify-center">
      <div className="flex w-[75%] justify-between">
        <Logo />
        <input
          type="text"
          id="first_name"
          onChange={onChangeHandler}
          className=" w-[200px]  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
