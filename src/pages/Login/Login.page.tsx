import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import Button from "../../components/UI/Button/StyledButton";
import Alert from "../../components/UI/Alert/StyledAlert";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import { stringNormalizer } from "../../utility/helper";
import { v4 as uuidv4 } from "uuid";

type Error = {
  usernameError: string | null;
  passwordError: string | null;
};

const initialErrorValue: Error = {
  usernameError: null,
  passwordError: null,
};

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | null>(null);
  const [error, setError] = useState<Error>(initialErrorValue);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newError = { ...initialErrorValue };

    if (!username) {
      newError.usernameError = "Username cannot be empty";
      hasError = true;
    }

    if (!password) {
      newError.passwordError = "Password cannot be empty";
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      const user: User = {
        name: username,
        isLoggedIn: true,
        id: uuidv4(),
        status: "online",
      };
      localStorage.setItem("user", JSON.stringify(user));
      resetForm();
      navigate("/chat");
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const username = stringNormalizer(e.target.value);
    setUsername(username);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const password = e.target.value.trim();
    setPassword(password);
  };

  // Function to reset the form fields and error state
  const resetForm = () => {
    setUsername("");
    setPassword(null);
    setError(initialErrorValue);
  };

  return (
    <form action="" className={styles["login-form"]}>
      <h1 className={styles["login-form-title"]}>Login to your account!</h1>

      <fieldset className={styles["inputs"]}>
        <input
          required
          type="text"
          autoComplete="username"
          placeholder="Username"
          id="username"
          onChange={handleUsername}
        />
        {/* Display error message for username if any */}
        {error.usernameError && (
          <Alert color="red">{error.usernameError}</Alert>
        )}

        <input
          required
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          id="password"
          onChange={handlePassword}
        />
        {/* Display error message for password if any */}
        {error.passwordError && (
          <Alert color="red">{error.passwordError}</Alert>
        )}
      </fieldset>

      <section>
        <Button
          variant="contained"
          size="large"
          text="center"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button variant="outlined" size="large" text="center" disabled>
          Register
        </Button>
        <Button variant="text" size="large" text="left" disabled>
          Forgot password?
        </Button>
      </section>
    </form>
  );
};

export default Login;
