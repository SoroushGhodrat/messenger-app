import React from "react";
import styles from "./ChatPage.module.css";
import ChatBox from "../../components/Chat/ChatBox/ChatBox";
import FriendsList from "../../components/Chat/FriendsList/FriendsList";

const ChatPage: React.FC = () => {
  return (
    <div className={styles["chat-container"]}>
      {/* Sidebar containing the friends list and search bar */}
      <aside className={styles["chat-sidebar"]}>
        <header className={styles["chat-sidebar-header"]}>
          <h1>Chats</h1>
        </header>

        {/* Search bar for filtering friends */}
        <div className={styles["chat-search-bar"]}>
          <input type="search" id="search" name="search" placeholder="Search" />
        </div>

        {/* Navigation containing the friends list */}
        <nav className={styles["friends-list"]}>
          <FriendsList />
        </nav>
      </aside>

      {/* Main chat box area */}
      <main className={styles["chat-box"]}>
        <section className={styles["message-list"]}>
          <ChatBox />
        </section>
      </main>
    </div>
  );
};

export default ChatPage;
