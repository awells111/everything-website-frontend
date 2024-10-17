import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WholeNumberInput from "./WholeNumberInput";

describe("WholeNumberInput", () => {
  it("rounds non-whole numbers to the nearest whole number", async () => {
    const setValue = jest.fn();
    const { getByPlaceholderText } = render(
      <WholeNumberInput
        value={undefined}
        setValue={setValue}
        placeholder="Test"
      />
    );
    const input = getByPlaceholderText("Test");
    await userEvent.type(input, "3.7");
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(4);
  });

  it("does not change whole numbers", async () => {
    const setValue = jest.fn();
    const { getByPlaceholderText } = render(
      <WholeNumberInput
        value={undefined}
        setValue={setValue}
        placeholder="Test"
      />
    );
    const input = getByPlaceholderText("Test");
    await userEvent.type(input, "5");
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(5);
  });

  it("does not change non-numeric values", async () => {
    const setValue = jest.fn();
    const { getByPlaceholderText } = render(
      <WholeNumberInput
        value={undefined}
        setValue={setValue}
        placeholder="Test"
      />
    );
    const input = getByPlaceholderText("Test");
    await userEvent.type(input, "abc");
    expect(setValue).not.toHaveBeenCalled();
  });

  it("does not change negative numbers", async () => {
    const setValue = jest.fn();
    const { getByPlaceholderText } = render(
      <WholeNumberInput
        value={undefined}
        setValue={setValue}
        placeholder="Test"
      />
    );
    const input = getByPlaceholderText("Test");
    await userEvent.type(input, "-3");
    expect(setValue).toHaveBeenCalled();
    expect(setValue).toHaveBeenCalledWith(3);
  });

  it("calls setValue with the correct value", async () => {
    const setValue = jest.fn();
    const { getByPlaceholderText } = render(
      <WholeNumberInput
        value={undefined}
        setValue={setValue}
        placeholder="Test"
      />
    );
    const input = getByPlaceholderText("Test");
    await userEvent.type(input, "4");
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(4);
  });
});
