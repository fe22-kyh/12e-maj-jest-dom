import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("page render english", () => {
  render(<WelcomePage language='en'/>);

  const page = screen.getByText("Welcome");
  expect(page).toBeInTheDocument();
});


test("page render swedish", () => {
  render(<WelcomePage language='sv' />);

  const page = screen.getByText("Välkommen");
  expect(page).toBeInTheDocument();
});

test("page render english with no selected language", () => {
  render(<WelcomePage />);

  const page = screen.getByText("Welcome");
  expect(page).toBeInTheDocument();
})