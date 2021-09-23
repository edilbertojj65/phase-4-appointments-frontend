import { useState } from "react";
import { Link } from "react-router-dom";
debugger
function Login({ onLogin }) {
  const [user_name, setUser_name] = useState("");
  debugger

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name }),
    }).then((r) => {
      if (r.ok) {
        return r.json();
      }
      return null;
    }).then((user) => onLogin(user));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login With User name</h3>
      <label htmlFor="user_name">User_name: </label>
      <input
        type="text"
         id="user_name"
        value={user_name}
        onChange={(e) => setUser_name(e.target.value)}
      />
      <button type="submit">Login</button>
      <Link to="/Home">Click Here to Login</Link>
    </form>
  );
}

export default Login;