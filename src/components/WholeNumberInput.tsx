import { Input } from "@mui/joy";
import React from "react";

interface WholeNumberInputProps {
  value: number | undefined;
  setValue: (value: number) => void;
  placeholder: string;
}

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
