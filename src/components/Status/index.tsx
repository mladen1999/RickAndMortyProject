// Component
import RadioButton from "./RadioButton";

// radioData
import { radioData } from "../../data/radioData";

export const Status = () => {
  return (
    <div className="flex">
      <span>Character Status</span>
      {radioData.map((item: any) => (
        <div className="flex" key={item.id}>
          <RadioButton {...item} />{" "}
        </div>
      ))}
    </div>
  );
};
