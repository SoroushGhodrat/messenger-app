// User types
export type UserStatus = "online" | "offline" | "away";

export interface User {
  id: string;
  name: string;
  status: UserStatus | undefined;
  isLoggedIn: boolean;
}

// Friend types
export type FriendStatus = "online" | "offline" | "away";

export interface Friend {
  id: number;
  name: string;
  status: FriendStatus;
}

// Message types
interface Message {
  messageId: string;
  text: string;
  sender: string;
  receiver: string;
  isRead: boolean;
  isEdited: boolean;
  createdAt: string;
}
