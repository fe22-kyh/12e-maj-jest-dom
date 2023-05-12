import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

const setupCredentials = (username, password) => {
  const loginForm = screen.getByTestId("login-form");
  const usernameField = screen.getByTestId('username-field');
  const passwordField = screen.getByTestId('password-field');

  fireEvent.change(usernameField, {target: {value: username}});
  fireEvent.change(passwordField, {target: {value: password}});

  expect(loginForm).toHaveFormValues({username, password});
}

test("username and password field exist", () => {
  render(<LoginForm />);


  const usernameLbl = screen.getByText("Username");
  const passwordLbl = screen.getByText("Password");

  expect(usernameLbl).toBeInTheDocument();
  expect(passwordLbl).toBeInTheDocument();
});

test("disabled login button", () => {
  render(<LoginForm />);

  const loginForm = screen.getByTestId("login-form");
  const loginBtn = screen.getByTestId("login-btn");

  expect(loginForm).toHaveFormValues({username: "", password: ""});
  expect(loginBtn).toBeDisabled();
});

/**
 * Greta vill se att login går att trycka på efter att hon har skrivit in sina inloggningsuppgifter så att hon kan logga in och se sin profilsida
 *  Kraven
 *  Knappen ska bli enabled då
 *    Användarnamnet är giltigit (mer än 4 tecken, inga specialtecken, inga sifforor, mellanslag...)
 */

test("enabled login button", () => {
  render(<LoginForm />);
  
  const username = "Greta";
  const password = "123456";
  setupCredentials(username, password);

  const loginBtn = screen.getByTestId('login-btn');

  expect(loginBtn).toBeEnabled();
});


test("Invalid credentials result in disabled btn", () => {
  render(<LoginForm />) // Denna kommer du att glömma, skriv in den i varje test :)
  const loginBtn = screen.getByTestId('login-btn');

  setupCredentials("Greta Karlsson", "123");
  expect(loginBtn).toBeDisabled();  

  setupCredentials("Greta@Karlsson", "123");
  expect(loginBtn).toBeDisabled();  

  setupCredentials("Greta!Karlsson", "123");
  expect(loginBtn).toBeDisabled();  

  setupCredentials("Greta_Karlsson", "123");
  expect(loginBtn).toBeDisabled();  

  setupCredentials("Gret43aKarlsson432", "123");
  expect(loginBtn).toBeDisabled();  

});