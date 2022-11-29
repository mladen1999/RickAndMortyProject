import Card from "../Card";

// Hook
import useCharacter from "./useCharacters";

const Characters = () => {
  const data = useCharacter();

  return (
    <div className="flex w-[100%] justify-center">
      <div className="flex w-[80%] flex-wrap items-center justify-center text-center">
        {data?.pages?.map((page) =>
          page?.results?.map((item: any) => (
            <div className="result" key={item.id}>
              <Card key={item.image} {...item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Characters;
