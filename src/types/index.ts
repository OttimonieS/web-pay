export interface User {
  email: string;
  username: string;
}

export interface Message {
  id: number;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
}

export interface Member {
  name: string;
  avatar: string;
  status: "online" | "away" | "offline";
}

export interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}
