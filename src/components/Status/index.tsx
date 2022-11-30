// Component
import RadioButton from "./RadioButton";

// radioData
import { radioData } from "../../data/radioData";

export const Status = () => {
  return (
    <div className="flex w-[100%] flex-wrap justify-center bg-slate-200 pt-7">
      <div className="flex w-[100%] justify-center">
        <div className="inline-block w-[75%] sm:flex">
          <span>Character status:</span>
          {radioData.map((item: any) => (
            <div className="flex" key={item.id}>
              <RadioButton {...item} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
