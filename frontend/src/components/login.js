import React, { useState } from "react";

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email..."
        type="email"
        value={email}
        onChange={setEmail}
      />

      <input
        placeholder="Password..."
        type="password"
        value={password}
        onChange={setPassword}
      />
      <button>Submit</button>
    </form>
  );
}
