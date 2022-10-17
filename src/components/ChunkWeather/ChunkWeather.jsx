import axios from 'axios';
import React from 'react'
import styles from './ChunkWeather.module.css';
import OneChunk from './OneChunk/OneChunk';

const ChunkWeather = ({city}) => {
    const APIKey = '8448efcedad71b585b1da4a171837115';

    const [data, setData] = React.useState([]);
    const [posX, setPosX] = React.useState(0)

    const nextPosX = () => {
        setPosX(posX - 750)
    }

    const prevPosX = () => {
        setPosX(posX + 750)
    }

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=moscow&limit=1&appid=${APIKey}`).then((res) => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                setData(res.data.list)

            })
        })
    }, []);


    if (data) {

        return (
            <div className={styles.chunkWeather}>
                <button className={styles.paginationBt} disabled = {posX === 0 ? "disabled" : ""} onClick={() => {prevPosX()}}>{'<'}</button>
                <div className={styles.wrapper}>
                    {
                        data.map((el) => <OneChunk posX = {posX} icon={el.weather[0].icon} temp={el.main.temp} date={el.dt_txt} />)
                    }
                </div>
                <button className={styles.paginationBt} disabled={posX === -5250 ? "disabled" : ""} onClick={() => {nextPosX()}}>{'>'}</button>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}


export default ChunkWeather;
