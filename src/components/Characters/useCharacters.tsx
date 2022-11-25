import { useState, useEffect } from "react";
type resultProps = {
  name: string;
  image: string;
};
export const useCharacters = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);
  return result;
};
