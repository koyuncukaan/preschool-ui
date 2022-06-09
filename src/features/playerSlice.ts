import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../types";

interface PlayerState {
  // players: Player[];
  selectedPlayerId: String;
}

const initialState: PlayerState = {
  // players: [],
  selectedPlayerId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    selectPlayer: (state: PlayerState, action: any) => {
      state.selectedPlayerId = action.payload;
      // console.log(state.selectedPlayerId);
    },
  },
});

export const { selectPlayer } = playerSlice.actions;

export default playerSlice.reducer;
