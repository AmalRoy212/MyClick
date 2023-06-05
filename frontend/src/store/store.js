import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux-toolkit/authSlice';
import adminAuthSlice from '../redux-toolkit/adminAuthSlice';

const store = configureStore({
  reducer : {
    auth : authSlice,
    adminAuth : adminAuthSlice
  },
  devTools:true
});

export default store;
