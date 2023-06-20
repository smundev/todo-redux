import { createSlice } from "@reduxjs/toolkit";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};

const initialState = {
  tasks: [],
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});
