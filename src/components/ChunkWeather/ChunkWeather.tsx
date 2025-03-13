import axios from 'axios';
import React from 'react'
import styles from './ChunkWeather.module.css';
import OneChunk from './OneChunk/OneChunk';
import { useSelector } from 'react-redux';
import nextPrevIcon from '../../assets/icons/next.png';
import { RootState } from '../../redux/store';

interface WeatherData {
    weather: Array<{
        icon: string;
    }>;
    main: {
        temp: number;
    };
    dt_txt: string;
}

interface ChunkWeatherProps {
    city: string;
}

const ChunkWeather: React.FC<ChunkWeatherProps> = ({ city }) => {
    const APIKey = '8448efcedad71b585b1da4a171837115';
    const sityName = useSelector((state: RootState) => state.currentlyWeather.cityName);
    const [data, setData] = React.useState<WeatherData[]>([]);
    const [posX, setPosX] = React.useState<number>(0);

    const nextPosX = () => {
        setPosX(posX - 500);
    }

    const prevPosX = () => {
        setPosX(posX + 500);
    }

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sityName}&limit=1&appid=${APIKey}`).then((res) => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${APIKey}`).then((res) => {
                setData(res.data.list);
            });
        });
    }, [sityName]);

    if (data) {
        return (
            <>
                <div className={styles.chunkWeather}>
                    <div className={styles.wrapper}>
                        {data.map((el, index) => (
                            <OneChunk 
                                key={index}
                                posX={posX} 
                                icon={el.weather[0].icon} 
                                temp={el.main.temp} 
                                date={el.dt_txt} 
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <button 
                        className={styles.paginationBt} 
                        disabled={posX === 0} 
                        onClick={prevPosX}
                    >
                        <img className={styles.backBt} src={nextPrevIcon} alt="Previous" />
                    </button>
                    <button 
                        className={styles.paginationBt} 
                        disabled={posX === -3500} 
                        onClick={nextPosX}
                    >
                        <img src={nextPrevIcon} alt="Next" />
                    </button>
                </div>
            </>
        );
    } else {
        return <div></div>;
    }
}

export default ChunkWeather; 