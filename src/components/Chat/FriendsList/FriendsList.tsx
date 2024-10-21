import React from "react";
import styles from "./FriendsList.module.css";
import Avatar from "../../UI/Avatar/Avatar";
import { Friend } from "../../../types/types";
import FriendsListData from "../../../mock/Friends";

const FriendsList: React.FC = () => {
  return (
    // Container for the friends list
    <div className={styles["container"]}>
      {/* Map over the FriendsListData array and render each friend */}
      {FriendsListData.map((friend) => (
        <div key={friend.id} className={styles["friend"]}>
          <Avatar status={friend.status} />
          <div className={styles["friend-name"]}>{friend.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
