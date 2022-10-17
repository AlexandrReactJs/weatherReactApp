import React from "react";
import axios from 'axios';
import styles from './CurrentlyWeather.module.css';
import windSpeedIcon from '../../assets/icons/windSpeed.png';
import humidityIcon from '../../assets/icons/humidity.png';
import pressureIcon from '../../assets/icons/pressure.png';
import feelsLikeIcon from '../../assets/icons/feelsLike.png'
const CurrentlyWeather = () => {
    const APIKey = '8448efcedad71b585b1da4a171837115';
    
    const [cityName, setCityName] = React.useState()

    const onClickEnter = (event) => {
        if (event.keyCode === 13) {
            onClickBt()
        }
    }

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=moscow&limit=1&appid=${APIKey}`).then((res) => {
            setCityName(res.data[0].name)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                setData(res.data)

            })
        })

    }, [])

    const getWeatherData = (sity) => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sity}&limit=1&appid=${APIKey}`).then((res) => {

            setCityName(res.data[0].name)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                setData(res.data)
                console.log(res)

            })
        })

    }

    const [data, setData] = React.useState(null);
    const textareaRef = React.useRef();


    const onClickBt = () => {
        const value = textareaRef.current.value;
        getWeatherData(value);
    }

    if(data) {

    return (
      
        <div className = { styles.CurrentlyWeather } >
            <div className={styles.weather}>
                <h1>{Math.floor(data.main.temp - 273)}<span className={styles.deg}>°</span></h1>
                <img src={`http://openweathermap.org/img/wn/${data ? data.weather[0].icon : 'Выберите город'}@2x.png`} alt="" />
            </div>
            <div>
                <h3 className={styles.cityName}>{cityName}</h3>
            </div>
            <div className={styles.selectSity}>
                <input onKeyDown={onClickEnter} ref={textareaRef} />
            </div>
            <div className={styles.weatherParams}>
                <div className={styles.weatherParametr}>
                    <img className={styles.paramsIcon} src={windSpeedIcon} alt="wind" />
                    <h3>Скорость<br/>ветра</h3>
                    <p>{data.wind.speed} м/с</p>
                </div>
                <div className={styles.weatherParametr}>
                    <img className={styles.paramsIcon} src={humidityIcon} alt="humidity" />
                    <h3>Влажность<br/>воздуха</h3>
                    <p>{data.main.humidity}%</p>
                </div>
                <div className={styles.weatherParametr}>
                    <img className={styles.paramsIcon} src={pressureIcon} alt="humidity" />
                    <h3>Атмосверное<br/>давление</h3>
                    <p>{data.main.pressure}гПа</p>
                </div>
                <div className={styles.weatherParametr}>
                    <img className={styles.paramsIcon} src={feelsLikeIcon} alt="humidity" />
                    <h3>Ощущается<br/>как</h3>
                    <p>{Math.floor(data.main.feels_like - 273)} <span className={styles.deg}>°</span></p>
                </div>
            </div>
        </div >

    )}
}


export default CurrentlyWeather;