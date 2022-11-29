import { useContext } from "react";

// Component
import { SearchContext } from "../../../context/SearchContext";

const useRadioButton = () => {
  const { setCharacterStatus } = useContext(SearchContext);

  const radioHandler = (e: string | any) => {
    setCharacterStatus(e.target.value);
  };
  return radioHandler;
};

export default useRadioButton;
