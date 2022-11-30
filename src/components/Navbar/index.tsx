// Icon
import Logo from "../../assets/Logo";
import { useNavbar } from "./useNavbar";

const Navbar = () => {
  const onChangeHandler = useNavbar();

  return (
    <div className="flex w-[100%] justify-center pt-2 pb-3">
      <div className="block w-[75%] space-y-2 sm:flex sm:justify-between">
        <Logo />
        <input
          type="text"
          id="first_name"
          onChange={onChangeHandler}
          className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:w-[200px]"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
