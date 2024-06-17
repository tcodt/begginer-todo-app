import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: () => {},
    toggleTodo: () => {},
    deleteTodo: () => {},
  },
});

export default todoSlice.reducer;
