import { render } from "@testing-library/react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

test("ThemedText renders correctly", () => {
  const { getByText } = render(
    <ThemedText type="title">Hello World</ThemedText>
  );
  const textElement = getByText("Hello World");
  expect(textElement).toBeTruthy();
});
