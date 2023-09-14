import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  id : string;
};

const initialState = {
  token: "",
  id : ""
} as AuthState;

export const auth = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id
    },
    loginFailed: (state) => {
      state.token = "";
      state.id = ""
    },
    logout:(state, action)=>{
      state.token = "";
      state.id = ""
    }
  },
});

export const {
  loginFailed,
  loginSuccess,
  logout,
  reset,
} = auth.actions;
export default auth.reducer;
