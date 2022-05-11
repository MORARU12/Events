import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import homeReducer from "../features/home/homeSlice";
import clientReducer from "../features/client/clientSlice";
import clientUpdateReducer from "../features/client/clientUpdateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    client: clientReducer,
    clientUpdate: clientUpdateReducer,
  },
});
