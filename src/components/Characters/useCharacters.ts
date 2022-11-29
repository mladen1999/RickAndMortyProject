import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";

// API
import { useFetchCharacters } from "../../api/useFetchCharacters";

const useCharacter = () => {
  const { fetchRepositories, character, characterStatus } =
    useFetchCharacters();

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["characters", character, characterStatus],

    ({ pageParam = 1 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (_lastPage, allPages) => {
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

export default useCharacter;
