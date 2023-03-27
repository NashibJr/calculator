import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numbers: ["0"],
};
const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    addNumbers: (state, action) => {
      state.numbers.push(action.payload);
      if (state.numbers && state.numbers[0] === "0") {
        state.numbers.shift();
      }
    },
    handleAnswer: (state, action) => {
      try {
        const numbers = state.numbers.join("");
        state.numbers = eval(numbers);
      } catch (error) {
        if (error) {
          state.numbers = "Syntax Error";
        }
      }
    },
    handleReset: (state, action) => {
      state.numbers = ["0"];
    },
    handleDelete: (state, action) => {
      state.numbers.pop();
      if (state.numbers.length === 0) {
        state.numbers = ["0"];
      }
    },
  },
});

export const { addNumbers, handleAnswer, handleReset, handleDelete } =
  numberSlice.actions;

export default numberSlice;
