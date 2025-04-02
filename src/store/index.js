import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (previousMiddleware)=> previousMiddleware().concat(apiSlice.middleware)
});

setupListeners(store.dispatch);