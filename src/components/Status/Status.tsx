import React, { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
export const Status = () => {
  const [selectedStatus, setSelectedStatus] = useState<String>();
  const { data, setData, status, setStatus } = useContext(SearchContext);
  // This function will be triggered when a radio button is selected
  const radioHandler = (e: string | any) => {
    setStatus(e.target.value);
  };
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
            onChange={radioHandler}
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
            onChange={radioHandler}
            id="inline-checked-radio-live"
            type="radio"
            value="live"
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
            onChange={radioHandler}
            id="inline-checked-radio-dead"
            type="radio"
            value="dead"
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
            onChange={radioHandler}
            id="inline-checked-radio-unknown"
            type="radio"
            value="unknown"
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
    </div>
  );
};
