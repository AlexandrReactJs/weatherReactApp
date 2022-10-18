import { configureStore } from "@reduxjs/toolkit";
import currentlyWeatherSlice from "./slices/currentlyWeatherSlice";

export default configureStore({
    reducer: {
        currentlyWeather: currentlyWeatherSlice,
    }
})