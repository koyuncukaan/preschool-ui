import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
  email: "",
  name: "",
  role: "",
  _id: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: User, action: any) => {
      state = action.payload;
      console.log(state);
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
