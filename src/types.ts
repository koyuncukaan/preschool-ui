export interface Player {
  _id: string;
  name: string;
  age: number;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
}
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface Response {
  user: {
    [key: string]: User;
  };
}
