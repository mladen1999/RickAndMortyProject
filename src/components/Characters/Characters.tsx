import Card from "../Card/Card";
import { useInfiniteQuery } from "react-query";
import { Status } from "../Status/Status";
import { useCharacters } from "./useCharacters";
import { useEffect } from "react";
import UseInfinite from "./useInfinite";

const Characters = () => {
  const data = UseInfinite();
  // const result = useCharacters();
  return (
    <div className="w-[100%] flex justify-center">
      <div className="flex flex-wrap w-[80%] justify-center items-center">
        {data?.pages?.map((page) =>
          page?.results?.map((comment: any) => (
            <div className="result" key={comment.id}>
              <Card key={comment.image} {...comment} />
            </div>
          ))
        )}

        {/* {result?.map((item) => (
        <div>{item.name}</div>
      ))} */}
      </div>
    </div>
  );
};

export default Characters;
