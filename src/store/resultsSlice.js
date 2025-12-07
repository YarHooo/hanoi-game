import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResult: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ userId, diskCount, difficulty, speed, moves, round }) {
        return {
          payload: {
            id: nanoid(),
            userId,
            diskCount,
            difficulty,
            speed,
            moves,
            round,
            finishedAt: new Date().toISOString(),
          },
        };
      },
    },
    resetResults(state) {
      state.items = [];
    },
  },
});

export const { addResult, resetResults } = resultsSlice.actions;
export default resultsSlice.reducer;
