export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: string;
};

export type Message = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  messageType: "Audio" | "Video" | "Text" | "Image";
  text?: string;
  image?: string;
  video?: string;
  audio?: string;
  forwardedCount: number;
  read: boolean;
  chat: Chat;
  createBy: User;
};

export type Chat = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name?: string;
  image?: string;
  type?: string;
  messages: Message[];
  users: User[];
};
