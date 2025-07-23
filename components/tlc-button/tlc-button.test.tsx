import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import TlcButton from "./tlc-button"; // adjust the path if needed

describe("TlcButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(<TlcButton />);
    expect(getByText("Press me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const { getByText } = render(<TlcButton />);
    fireEvent.press(getByText("Press me"));

    expect(consoleSpy).toHaveBeenCalledWith("Pressed");

    consoleSpy.mockRestore();
  });
});
