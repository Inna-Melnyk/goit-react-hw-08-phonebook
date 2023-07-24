import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  logOut,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isfetchingCurrent: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUpUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logInUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isfetchingCurrent = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isfetchingCurrent = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isfetchingCurrent = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
