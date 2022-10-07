import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "list",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(el => el.id !== payload);
    },
    editUser: (state, { payload }) => {
      state.users = state.users.map(el => el.id === payload.id ? payload : el )
    }

  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
