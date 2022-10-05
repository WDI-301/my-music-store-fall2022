import { createSlice } from '@reduxjs/toolkit';

// This is how you split your state.
const userSlice = createSlice({
  name: 'user',
  initialState: null, // Redux does not accept undefined as a default value.
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: () => null,
  },
});

// Action creators. functions that when we call it, create our actions.
export const { signIn, signOut } = userSlice.actions;
export const { reducer } = userSlice;
