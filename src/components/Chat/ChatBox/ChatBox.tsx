import React from "react";
import Avatar from "../../UI/Avatar/Avatar";
import { useAppContext } from "../../../store/AppDataContext";
import ChatInput from "../ChatInput/ChatInput";
import styles from "./ChatBox.module.css";
import ConversationsList from "../Conversations/ConversationsList";

const ChatBox: React.FC = () => {
  // Retrieve selected friend and chat histories from the context
  const { selectedFriend, chatHistories } = useAppContext();

  // Get the stored user from local storage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Get the messages for the selected friend if both user and selected friend are available
  const messages =
    user && selectedFriend ? chatHistories[user.username]?.[selectedFriend.name] || [] : [];

  return (
    <div className={styles["chat-box-container"]}>
      <header className={styles["chat-box-header"]}>
        {selectedFriend ? (
          <>
            {/* Display the avatar and name of the selected friend */}
            <Avatar status={selectedFriend.status} />
            <h5>{selectedFriend.name}</h5>
          </>
        ) : (
          // Prompt the user to select a friend if none is selected
          <h3>Select a friend to start a chat!</h3>
        )}
      </header>

      <main className={styles["conversations-list"]}>
        {/* Display the list of messages */}
        <ConversationsList messages={messages} />
      </main>

      <footer className={styles["chat-input-container"]}>
        {/* Input for sending new messages */}
        <ChatInput onSendMessage={() => {}} />
      </footer>
    </div>
  );
};

export default ChatBox;
