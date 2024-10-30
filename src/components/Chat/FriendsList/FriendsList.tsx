import React from "react";
import styles from "./FriendsList.module.css";
import Avatar from "../../UI/Avatar/Avatar";
import { useAppContext } from "../../../store/AppDataContext";
import { Friend } from "../../../types/types";
import FriendsListData from "../../../mock/Friends";

const FriendsList: React.FC = () => {
  const { selectFriend } = useAppContext();

  const handleSelectFriend = (friend: Friend) => {
    // Call the selectFriend function with the selected friend
    selectFriend(friend);
  };

  return (
    <div className={styles["container"]}>
      <header>
        <h1>Chats</h1>
      </header>
      {/* Map over the FriendsListData array and render each friend */}
      {FriendsListData.map((friend) => (
        <div
          key={friend.id}
          className={styles.friend}
          onClick={() => handleSelectFriend(friend)}
        >
          <div className={styles["friend-top"]}>
            <div className={styles["friend-left-side"]}>
              <Avatar status={friend.status} />
              <div className={styles["friend-name"]}>{friend.name}</div>
            </div>
            <div className={styles["friend-right-side"]}>
              <div className={styles["last-message-time"]}>20/12/2024</div>
            </div>
          </div>
          <div className={styles["last-message"]}>Show the last message</div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
