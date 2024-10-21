import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { User } from "../../../types/types";

const initialUser: User = {
  id: "",
  name: "",
  isLoggedIn: false,
  status: "offline",
};

const Header: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("conversation");

    setUser(initialUser);

    navigate("/");
  };

  useEffect(() => {
    // Retrieve the stored user from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // If a user is found, set the user state
      setUser(JSON.parse(storedUser));
    } else {
      // If no user is found, navigate to the login page
      navigate("/login");
    }
  }, [setUser, navigate]);

  return (
    <div className={styles["container"]}>
      <div className={styles["Logo"]}>
        {user.isLoggedIn ? `Hi ${user.name} !` : null}
      </div>
      <nav className={styles["navLinks"]}>
        {user.isLoggedIn ? (
          // Display the logout link if the user is logged in
          <NavLink to="/" className={styles["navLink"]} onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          // Display the login link if the user is not logged in
          <NavLink to="/" className={styles["navLink"]}>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
