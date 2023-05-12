import { useState } from "react";

const initialFormState = {
  username: '',
  password: ''
}

function LoginForm() {
  const [formState, setFormState] = useState(initialFormState);

  const handleFormChange = ({name, value}) => setFormState({...formState, [name]: value});

  const hasEnabledLogin = () => {
    if (formState.username === '' || formState.password === '') return false;
    if (formState.username.length < 4) return false;
    if (formState.username.match("[ @!_0-9]")) return false;

    return true;
  }

  return (
    <form data-testid="login-form">
      <div>
        <label>Username</label>
        <input 
          type="text" 
          placeholder="Insert username..."
          data-testid="username-field"
          name="username"
          value={formState.username}
          onChange={e => handleFormChange(e.target)} />
      </div>

      <div>
        <label>Password</label>
        <input 
          type="text" 
          placeholder="Insert password..."
          data-testid="password-field"
          name="password"
          value={formState.password} 
          onChange={e => handleFormChange(e.target)} />
      </div>

      <button data-testid="login-btn" type="submit" disabled={!hasEnabledLogin()}>Login</button>
      <button data-testid="cancel-btn" type="reset">Cancel</button>
    </form>
  )
}

export default LoginForm;