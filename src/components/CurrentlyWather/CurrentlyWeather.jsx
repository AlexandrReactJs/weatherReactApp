import React from "react";
import axios from 'axios';
import styles from './CurrentlyWeather.module.css';
import windSpeedIcon from '../../assets/icons/windSpeed.png';
import humidityIcon from '../../assets/icons/humidity.png';
import pressureIcon from '../../assets/icons/pressure.png';
import feelsLikeIcon from '../../assets/icons/feelsLike.png'
import { useSelector, useDispatch } from "react-redux";

import { setSityName } from "../../redux/slices/currentlyWeatherSlice";
import { setData } from "../../redux/slices/currentlyWeatherSlice";



const CurrentlyWeather = () => {
    const dispatch = useDispatch();

    const cityName = useSelector(state => state.currentlyWeather.cityName);
    const data = useSelector(state => state.currentlyWeather.data);

    const textareaRef = React.useRef();

    const APIKey = '8448efcedad71b585b1da4a171837115';



    const onClickEnter = (event) => {
        if (event.keyCode === 13) {
            onClickBt()
        }
    }

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=moscow&limit=1&appid=${APIKey}`).then((res) => {
            dispatch(setSityName(res.data[0].name))
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                dispatch(setData(res.data))

            })
        })

    }, [dispatch])

    const getWeatherData = (sity) => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sity}&limit=1&appid=${APIKey}`).then((res) => {

            dispatch(setSityName(res.data[0].name))
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                dispatch(setData(res.data))

            })
        })

    }


    const onClickBt = () => {
        const value = textareaRef.current.value;
        getWeatherData(value);
    }

    if (data) {

        return (

            <div className={styles.CurrentlyWeather} >
                <div className={styles.sityWeatherWrapper}>
                    <div className={styles.weather}>
                        <h1>{Math.floor(data.main.temp - 273)}<span className={styles.deg}>°</span></h1>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                    </div>
                    <div>
                        <h3 className={styles.cityName}>{cityName}</h3>
                    </div>
                    <div className={styles.selectSity}>
                        <input onKeyDown={onClickEnter} ref={textareaRef} />
                    </div>
                </div>
                <div className={styles.weatherParams}>
                    <div className={styles.weatherParametr}>
                        <h3>Скорость<br />ветра</h3>
                        <p>{data.wind.speed} м/с</p>
                    </div>
                    <div className={styles.weatherParametr}>
                        <h3>Влажность<br />воздуха</h3>
                        <p>{data.main.humidity}%</p>
                    </div>
                    <div className={styles.weatherParametr}>
                        <h3>Атмосферное<br />давление</h3>
                        <p>{data.main.pressure}гПа</p>
                    </div>
                    <div className={styles.weatherParametr}>
                        <h3>Ощущается<br />как</h3>
                        <p>{Math.floor(data.main.feels_like - 273)} <span className={styles.deg}>°</span></p>
                    </div>
                    <div className={styles.weatherParametr}>
                        <h3>Видимость</h3>
                        <p>{data.visibility / 1000}км</p>
                    </div>
                    <div className={styles.weatherParametr}>
                        <h3>Порыв ветра</h3>
                        <p>{data.wind.gust} м/с</p>
                    </div>
                </div>
            </div >

        )
    }
}


export default CurrentlyWeather;