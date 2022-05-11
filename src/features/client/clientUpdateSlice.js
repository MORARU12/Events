import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientService from "./clientService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const clientUpdate = createAsyncThunk(
  "client/update",
  async (user, thunkAPI) => {
    try {
      return await clientService.clientUpdate(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.String();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const clientUpdateSlice = createSlice({
  name: "clientUpdate",
  initialState: initialState,

  //Async
  extraReducers: (builder) => {
    builder
      .addCase(clientUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clientUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(clientUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default clientUpdateSlice.reducer;
