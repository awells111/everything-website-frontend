import { Input } from "@mui/joy";
import React from "react";

interface WholeNumberInputProps {
  value: number | undefined;
  setValue: (value: number) => void;
  placeholder: string;
}

/**
 * A text input that restricts the user to typing a whole number, and rounds
 * non-whole number values to the nearest whole number.
 *
 * @param value The current value of the input, which should be a number, or
 * undefined if the input is empty.
 * @param setValue A function that takes the new value of the input, and should
 * be called when the user types a new value.
 * @param placeholder A string to display in the input when the user has not
 * typed anything.
 */
const WholeNumberInput: React.FC<WholeNumberInputProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (isNaN(newValue) || newValue < 0) {
      return;
    }
    if (newValue % 1 !== 0) {
      setValue(Math.floor(newValue));
      return;
    }
    setValue(newValue);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type="number"
    />
  );
};

export default WholeNumberInput;
