import { useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
type resultProps = {
  name: string;
  image: string;
};
export const useCharacters = () => {
  const [result, setResult] = useState<resultProps[]>([]);
  const { data: search, status } = useContext(SearchContext);

  useEffect(() => {
    const api = async () => {
      const result = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${
          search ? search : ""
        }&status=${status ? status : ""}`
      );
      const jsonData = await result.json();
      setResult(jsonData.results);
    };

    api();
  }, [search, status]);
  return result;
};
