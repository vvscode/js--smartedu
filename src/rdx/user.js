import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyInfo } from "../api";

export const fetchCurrentUserInfo = createAsyncThunk(
  "user/fetchCurrentUserInfo",
  async () => {
    return await getMyInfo();
  }
);

export const selectUserInfo = (state) => state.user.userInfo;

export default createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    [fetchCurrentUserInfo.fulfilled.type]: (state, action) =>
      (state.userInfo = action.payload),
    [fetchCurrentUserInfo.rejected.type]: (state) => (state.userInfo = null),
    deleteUserInfo: (state) => (state.userInfo = null),
    updateUserToken: (state, action) =>
      (state.userInfo = { ...state.userInfo, token: action.payload }),
  },
});
