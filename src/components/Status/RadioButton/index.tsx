// Hook
import useRadioButton from "./useRadioButton";

// Type
interface IStatus {
  label: string;
  value: string;
}

function RadioButton({ label, value }: IStatus) {
  // Todo: move to custom hook ===> DONE ***
  const radioHandler = useRadioButton();
  return (
    <div className="mx-[7px] flex items-center">
      <input
        onChange={radioHandler}
        id="inline-checked-radio-any"
        type="radio"
        value={value}
        name="inline-radio-group"
        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor="inline-checked-radio"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
