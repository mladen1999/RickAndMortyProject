import { useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
import useInfinite from "./useInfinite";
type resultProps = {
  name: string;
  image: string;
};
export const useCharacters = () => {
  const [result, setResult] = useState<resultProps[]>([]);
  const { character, characterStatus } = useContext(SearchContext);
  const resu = useInfinite();
  useEffect(() => {
    const api = async () => {
      const result = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${
          character ? character : ""
        }&status=${characterStatus ? characterStatus : ""}`
      );
      const jsonData = await result.json();
      setResult(jsonData.results);
    };

    api();
  }, [character, characterStatus, resu]);
  return result;
};
