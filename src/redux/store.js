import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./slices/mobileSlice";
import webSlice from "./slices/webSlice";

const reducer = {
    mobile: mobileSlice,
}

export const store = configureStore({
    reducer: {
        mobile: mobileSlice,
        web: webSlice
    }
});