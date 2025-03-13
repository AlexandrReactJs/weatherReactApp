import { configureStore } from "@reduxjs/toolkit";
import currentlyWeatherSlice from "./slices/currentlyWeatherSlice";

export const store = configureStore({
    reducer: {
        currentlyWeather: currentlyWeatherSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 