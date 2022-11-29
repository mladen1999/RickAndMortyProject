import { useInfiniteQuery } from "react-query";
import { Status } from "../Status/Status";
import { useCharacters } from "./useCharacters";
import { useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";
const UseInfinite = () => {
  const { character, characterStatus } = useContext(SearchContext);

  const fetchRepositories = async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${
        character ? character : ""
      }&status=${characterStatus}&page=${page}`
    );
    return response.json();
  };

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["characters", character, characterStatus],

      ({ pageParam = 1 }) => fetchRepositories(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return nextPage;
        },
      }
    );

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, character, data, characterStatus]);
  return data;
};

export default UseInfinite;
