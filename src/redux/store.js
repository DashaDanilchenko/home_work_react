import { configureStore } from "@reduxjs/toolkit";
import { usersApp } from "./usersApp";

export const store = configureStore({
    reducer: {[usersApp.reducerPath]: usersApp.reducer},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApp.middleware)
})