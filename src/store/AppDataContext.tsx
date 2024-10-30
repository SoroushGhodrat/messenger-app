import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { Friend, Message, User } from "../types/types";

interface AppDataContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedFriend: Friend | null;
  selectFriend: (friend: Friend | null) => void;
  chatHistories: { [key: string]: { [key: string]: Message[] } };
  addMessage: (
    senderId: string,
    receiverName: string,
    message: Message,
  ) => void;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

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
  const [user, setUser] = useState<User | null>(null);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [chatHistories, setChatHistories] = useState<{
    [key: string]: { [key: string]: Message[] };
  }>({});

  const selectFriend = (friend: Friend | null) => {
    setSelectedFriend(friend);
  };

  const addMessage = (
    senderId: string,
    receiverName: string,
    message: Message,
  ) => {
    setChatHistories((prevHistories) => {
      const senderHistory = prevHistories[senderId] || {};
      const receiverHistory = senderHistory[receiverName] || [];

      return {
        ...prevHistories,
        [senderId]: {
          ...senderHistory,
          [receiverName]: [...receiverHistory, message],
        },
      };
    });
  };

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      selectedFriend,
      selectFriend,
      chatHistories,
      addMessage,
    }),
    [user, selectedFriend, chatHistories],
  );

  return (
    <AppDataContext.Provider value={contextValue}>
      {children}
    </AppDataContext.Provider>
  );
};
