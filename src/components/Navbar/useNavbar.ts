import { useContext } from "react";

// Hook
import useDebounce from "../../hooks/useDebounce";

// Context
import { SearchContext } from "../../context/SearchContext";

export const useNavbar = () => {
  const { setCharacter } = useContext(SearchContext);
  const debounce = useDebounce();

  const onChangeHandler = (e: string | any) => {
    debounce(() => setCharacter(e.target.value), 500);
  };

  return onChangeHandler;
};
