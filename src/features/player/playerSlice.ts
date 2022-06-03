import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../../store";

const url = "http://localhost:5000/api/v1/players";

interface Player {
  id: string;
  name: string;
  age: number;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
}

interface PlayerState {
  players: Player[];
  isLoading: boolean;
}

const initialState: PlayerState = {
  players: [],
  isLoading: true,
};

export const getPlayers = createAsyncThunk(
  "player/getPlayers",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      const resp = await axios(url);

      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    testPlayers: (state: PlayerState) => {
      //   console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlayers.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getPlayers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players = action.payload;
      }),
      builder.addCase(getPlayers.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { testPlayers } = playerSlice.actions;

export default playerSlice.reducer;
