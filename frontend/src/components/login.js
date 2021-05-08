import React, { useState } from "react";
import { useAuth } from '../contexts/authContext';
import { useHistory } from "react-router-dom";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default function LoginForm() {
  
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    try {
      await login(email, password);
      history.push('/orders');
    } catch {
      console.log('User cannot be logged in')
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email..."
        type="email"
        value={email}
        onChange={setEmail}
        required
      />

      <input
        placeholder="Password..."
        type="password"
        value={password}
        onChange={setPassword}
        required
      />
      <button>Submit</button>
    </form>
  );
}
