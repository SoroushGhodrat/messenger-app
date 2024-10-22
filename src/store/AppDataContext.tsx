import React, { createContext, useContext, useState, ReactNode } from "react";
import { Friend, Message } from "../types/types";

interface AppDataContextType {
  selectedFriend: Friend | null;
  selectFriend: (friend: Friend | null) => void;
  chatHistories: { [key: string]: { [key: string]: Message[] } };
  addMessage: (senderId: string, receiverId: string, message: Message) => void;
}

const AppDataContext = createContext<AppDataContextType | any>(undefined);

export const useAppContext = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppDataProvider");
  }
  return context;
};

export const AppDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [chatHistories, setChatHistories] = useState<{
    [key: string]: { [key: string]: Message[] };
  }>({});

  const selectFriend = (friend: Friend | null) => {
    setSelectedFriend(friend);
  };

  const addMessage = (
    senderId: string,
    receiverId: string,
    message: Message,
  ) => {
    setChatHistories((prevHistories) => {
      const senderHistory = prevHistories[senderId] || {};
      const receiverHistory = senderHistory[receiverId] || [];
      return {
        ...prevHistories,
        [senderId]: {
          ...senderHistory,
          [receiverId]: [...receiverHistory, message],
        },
      };
    });
  };

  return (
    <AppDataContext.Provider
      value={{ selectedFriend, selectFriend, chatHistories, addMessage }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
