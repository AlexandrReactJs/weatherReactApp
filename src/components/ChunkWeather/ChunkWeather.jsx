import axios from 'axios';
import React from 'react'
import styles from './ChunkWeather.module.css';
import OneChunk from './OneChunk/OneChunk';
import { useSelector } from 'react-redux';
import nextPrevIcon from '../../assets/icons/nextPrevIcon.png'

const ChunkWeather = ({city}) => {
    const APIKey = '8448efcedad71b585b1da4a171837115';
    const sityName = useSelector(state => state.currentlyWeather.cityName)
    const [data, setData] = React.useState([]);
    const [posX, setPosX] = React.useState(0)

    const nextPosX = () => {
        setPosX(posX - 750)
    }

    const prevPosX = () => {
        setPosX(posX + 750)
    }

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sityName}&limit=1&appid=${APIKey}`).then((res) => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                setData(res.data.list)
                console.log(res.data)
            })
        })
    }, [sityName]);


    if (data) {

        return (
            <div className={styles.chunkWeather}>
                <button className={styles.paginationBt} disabled = {posX === 0 ? "disabled" : ""} onClick={() => {prevPosX()}}><img className={styles.backBt} src={nextPrevIcon}/></button>
                <div className={styles.wrapper}>
                    {
                        data.map((el) => <OneChunk posX = {posX} icon={el.weather[0].icon} temp={el.main.temp} date={el.dt_txt} />)
                    }
                </div>
                <button className={styles.paginationBt} disabled={posX === -5250 ? "disabled" : ""} onClick={() => {nextPosX()}}><img src={nextPrevIcon}/></button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}


export default ChunkWeather;
