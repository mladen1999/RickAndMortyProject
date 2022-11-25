import { useState, useEffect } from "react";
type resultProps = {
  name: string;
  image: string;
};
const Characters = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://rickandmortyapi.com/api/character/?page=30"
      );
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);
  return (
    <div>
      {result.map((value) => {
        return (
          <div key={value.name}>
            <div>{value.name}</div>
            <img src={value.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
