import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar";
import { test } from "@jest/globals";
import React from "react";

test("this is a sandbox test to see if it works", () => {
  render(<NavBar />);
  screen.debug();
});
