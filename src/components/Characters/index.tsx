import Card from "../Card";
import NotFound from "../NotFound";

// Hook
import useCharacter from "./useCharacters";

const Characters = () => {
  const { data, isLoading } = useCharacter();

  if (isLoading) return <div>Loading</div>;

  /* if (data?.pages[0].error) return <div>{data?.pages[0].error}</div>; */
  if (data?.pages[0].error) return <NotFound />;

  return (
    <div className="flex w-[100%] justify-center bg-slate-200">
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
