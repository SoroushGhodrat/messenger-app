import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../../store/AppDataContext";
import Button from "../../UI/Button/StyledButton";
import styles from "./ChatInput.module.css";
import { Message } from "../../../types/types";

interface ChatInputProps {
  onSendMessage: (message: Message) => void;
}

interface User {
  name: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const { selectedFriend, addMessage } = useAppContext();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      setUser(user);
    }
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim().length > 0 && selectedFriend && user) {
      const newMessage: Message = {
        messageId: uuidv4(),
        text: input.trim(),
        sender: user.name,
        receiver: selectedFriend.name,
        isRead: false,
        isEdited: false,
        createdAt: new Date().toISOString(),
      };
      // Add the message to the chat history
      addMessage(user.name, selectedFriend.name, newMessage);
      // Send the new message to the parent component
      onSendMessage(newMessage);
      // Clear the input field
      setInput("");
    }
  };

  return (
    <form
      className={styles["chat-input-container"]}
      onSubmit={handleSendMessage}
    >
      {/* Input field for typing a message */}
      <input
        type="text"
        id="chat-input"
        name="chat-input"
        placeholder="Type a message"
        value={input}
        onChange={handleMessageChange}
      />
      {/* Send button, disabled if the input is empty */}
      <Button
        size="medium"
        variant="contained"
        text="center"
        disabled={input.trim().length === 0}
      >
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
