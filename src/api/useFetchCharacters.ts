import { useContext } from "react";

// Context
import { SearchContext } from "../context/SearchContext";

export const useFetchCharacters = () => {
  const { character, characterStatus } = useContext(SearchContext);

  const fetchRepositories = async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${
        character ? character : ""
      }&status=${characterStatus}&page=${page}`
    );
    return response.json();
  };

  return { fetchRepositories, character, characterStatus };
};
