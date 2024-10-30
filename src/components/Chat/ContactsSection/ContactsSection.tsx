import React from "react";
import styled from "./ContactsSection.module.css";
import Search from "../../UI/Search/StyledSearch";
import FriendsList from "../FriendsList/FriendsList";

const ContactsSection: React.FC = () => {
  return (
    <div className={styled["contacts-section-container"]}>
      <div className={styled["search-container"]}>
        <Search size="large" variant="outlined" textPosition="left" />
      </div>

      <div className={styled["contact-list"]}>
        <FriendsList />
      </div>
    </div>
  );
};

export default ContactsSection;
