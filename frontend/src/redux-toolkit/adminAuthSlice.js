import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin : localStorage.getItem('admin') ? localStorage.getItem('admin') : null
}

const adminAuthSlice = createSlice({
  name:'admin',
  initialState,
  reducers : {
    login : (state,action) => {
      state.admin = action.payload;
      localStorage.setItem('admin',action.payload);
    },
    logout : (state,action) => {
      state.admin = null
      localStorage.removeItem('admin');
    }
  }
});

export const { login, logout } = adminAuthSlice.actions

export default adminAuthSlice.reducer;