import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import commonSlice from "./common.slice";
export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        commonState: commonSlice
    }
});