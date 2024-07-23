import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Define your reducers here
    app: appSlice,
  },
});

export default store;
