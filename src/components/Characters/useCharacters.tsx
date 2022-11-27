import { useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
type resultProps = {
  name: string;
  image: string;
};
export const useCharacters = () => {
  const [result, setResult] = useState<resultProps[]>([]);
  const { data } = useContext(SearchContext);
  useEffect(() => {
    const api = async () => {
      const data1 = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${data}&status=alive`
      );
      const jsonData = await data1.json();
      setResult(jsonData.results);
    };

    api();
  }, [data]);
  return result;
};
