import Card from "../Card/Card";

import UseInfinite from "./useInfinite";

const Characters = () => {
  const data = UseInfinite();
  return (
    <div className="w-[100%] flex justify-center">
      <div className="flex flex-wrap w-[80%] justify-center items-center">
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
