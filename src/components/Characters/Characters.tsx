import Card from "../Card/Card";
import { useCharacters } from "./useCharacters";

const Characters = () => {
  const result = useCharacters();
  console.log("Characters.tsx " + result);
  return (
    <div>
      <div className="flex">
        <div className="flex items-center mr-4">
          <label
            htmlFor="inline-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Character status:
          </label>
        </div>

        <div className="flex items-center mr-4">
          <input
            id="inline-checked-radio-any"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-checked-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Any
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checked-radio-live"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-checked-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Live
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checked-radio-dead"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-checked-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dead
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checked-radio-unknown"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="inline-checked-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Unknown
          </label>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {result?.map((item) => result && <Card key={item.image} {...item} />)}
        <p></p>
      </div>
    </div>
  );
};

export default Characters;
