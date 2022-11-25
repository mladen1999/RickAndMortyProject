import Card from "../Card/Card";
import { useCharacters } from "./useCharacters";

const Characters = () => {
  const result = useCharacters();
  console.log(result);
  return (
    <div className="grid grid-cols-4 gap-4">
      {result?.map((item) => result && <Card key={item.name} {...item} />)}
      <p></p>
    </div>
  );
};

export default Characters;
