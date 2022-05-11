import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeService from "./homeService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const home = createAsyncThunk("home/user", async (thunkAPI) => {
  try {
    return await homeService.home();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.data.message) ||
      error.message ||
      error.String();
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,

  //Async
  extraReducers: (builder) => {
    builder
      .addCase(home.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(home.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(home.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default homeSlice.reducer;
