import { useContext, useState } from "react";
import { myContext } from "./context";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn } = useContext(myContext);

  const handleLogin = () => {
    if (email === "sonu@gmail.com" && password === "sonu") {
      setIsLoggedIn(true);
      // <Navigate to="/" />;
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>

      <small>Email : sonu@gmail.com</small>
      <br />
      <small>Password : sonu</small>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
