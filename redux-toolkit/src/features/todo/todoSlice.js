import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Just Normal Todo",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // since i marked this object as reducers it will automatically inject the initialState as state and action is payload
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    }, // These two parameters are mandatory
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload // by payload we mean the data coming from the action parameter
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
