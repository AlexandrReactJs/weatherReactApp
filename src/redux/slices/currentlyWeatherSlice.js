import { createSlice } from "@reduxjs/toolkit";


export const currentlyWeatherSlice = createSlice({
    name: 'currentlyWeather',
    initialState: {
        cityName: '',
        data: null,

    },
    reducers: {
        setSityName (state, action) {
            state.cityName = action.payload
        },
        setData (state, action) {
            state.data = action.payload
        }

    }
});


export const {setSityName, setData} = currentlyWeatherSlice.actions;

export default currentlyWeatherSlice.reducer;