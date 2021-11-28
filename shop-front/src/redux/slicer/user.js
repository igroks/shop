import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  name: '',
  logged: false,
  userType: 'visitor',

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        email: action.payload.email,
        name: action.payload.name,
        logged: true,
        userType: action.payload.userTypeId === 2?'client':'collaborator',
      }
    },
    logout: state => initialState
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer
