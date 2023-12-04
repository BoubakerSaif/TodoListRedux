import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: uuidv4(), task: "Learn REACT REDUX", isEdited: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    editTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, editTodo, updateTodo } = todoSlice.actions;
