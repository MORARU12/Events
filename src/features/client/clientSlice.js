import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientService from "./clientService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const client = createAsyncThunk("client/user", async (id, thunkAPI) => {
  try {
    return await clientService.client(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.data.message) ||
      error.message ||
      error.String();
    return thunkAPI.rejectWithValue(message);
  }
});

export const clientUpdate = createAsyncThunk(
  "client/update",
  async (id, userDatablbl, thunkAPI) => {
    try {
      return await clientService.client(id, userDatablbl);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.String();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const clientSlice = createSlice({
  name: "client",
  initialState: initialState,

  //Async
  extraReducers: (builder) => {
    builder
      .addCase(client.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(client.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(client.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default clientSlice.reducer;
