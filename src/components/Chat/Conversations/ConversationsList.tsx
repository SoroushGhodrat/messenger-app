import React from "react";
import styles from "./ConversationsList.module.css";
import { Message } from "../../../types/types";

type ConversationsProps = {
  messages: Message[];
};

// ConversationsList component to display a list of messages
const ConversationsList: React.FC<ConversationsProps> = ({ messages }) => {
  return (
    <div className={styles["conversations-container"]}>
      {/* Map over the messages array and render each message */}
      {messages.map((message) => (
        <div key={message.messageId} className={styles["message"]}>
          <strong>
            <em>{new Date(message.createdAt).toLocaleString()}</em>
          </strong>
          <div className={styles["message-text"]}>{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
