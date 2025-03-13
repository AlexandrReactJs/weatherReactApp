import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherData {
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };
    weather: Array<{
        icon: string;
    }>;
    wind: {
        speed: number;
        gust: number;
    };
    visibility: number;
}

interface CurrentlyWeatherState {
    cityName: string;
    data: WeatherData | null;
}

const initialState: CurrentlyWeatherState = {
    cityName: '',
    data: null,
};

export const currentlyWeatherSlice = createSlice({
    name: 'currentlyWeather',
    initialState,
    reducers: {
        setSityName(state, action: PayloadAction<string>) {
            state.cityName = action.payload;
        },
        setData(state, action: PayloadAction<WeatherData>) {
            state.data = action.payload;
        }
    }
});

export const { setSityName, setData } = currentlyWeatherSlice.actions;

export default currentlyWeatherSlice.reducer; 