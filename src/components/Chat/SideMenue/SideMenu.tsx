import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Avatar from "../../UI/Avatar/Avatar";
import styled from "./SideMenu.module.css";
import { useAppContext } from "../../../store/AppDataContext";
import { User } from "../../../types/types";

const initialUser: User = {
  id: "",
  name: "",
  isLoggedIn: false,
  status: "offline",
};

const SideMenu: React.FC = () => {
  const [logedinUser, setLogedinUser] = useState<User>(initialUser);

  const { selectFriend, user, setUser } = useAppContext();

  const navigate = useNavigate();

  // Retrieve user data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setLogedinUser(parsedUser);
      setUser(parsedUser);
    }
  }, [setUser]);

  // Update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setLogedinUser(user);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");

    setUser(initialUser);
    selectFriend(null);

    navigate("/");
  };

  return (
    <div className={styled["side-menu-container"]}>
      <div className={styled["side-menu-avatar"]}>
        <Avatar status={logedinUser.status || "offline"} />
        {logedinUser.name}
      </div>
      <ul>
        <li>
          <NavLink to="/chat" className={styled["side-menu-link"]}>
            <MessageOutlined className={styled["side-menu-icon"]} />
            <p>Messages</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={styled["side-menu-link"]}>
            <BellOutlined className={styled["side-menu-icon"]} />
            <p>Notifications</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={styled["side-menu-link"]}>
            <SettingOutlined className={styled["side-menu-icon"]} />
            <p>Settings</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={styled["side-menu-link"]}
            onClick={handleLogout}
          >
            <LogoutOutlined className={styled["side-menu-icon"]} />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
