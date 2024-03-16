export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: string;
};

export type Message = {
  text: string;
  user?: User;
};
