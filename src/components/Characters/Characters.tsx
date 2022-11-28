import Card from "../Card/Card";
import { Status } from "../Status/Status";
import { useCharacters } from "./useCharacters";

const Characters = () => {
  const result = useCharacters();
  console.log("Characters.tsx " + result);
  return (
    <div>
      <Status />
      <div className="grid grid-cols-4 gap-4">
        {result?.map((item) => result && <Card key={item.image} {...item} />)}
        <p></p>
      </div>
    </div>
  );
};

export default Characters;
