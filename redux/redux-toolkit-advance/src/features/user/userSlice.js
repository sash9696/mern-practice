import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//fetch the users data and then pass it throught the compoennts

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();

  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

export const useUser = () => useSelector((state) => state.user);
