import React from 'react'
import styles from './OneChunk.module.css'

interface OneChunkProps {
    temp: number;
    date: string;
    icon: string;
    posX: number;
}

const OneChunk: React.FC<OneChunkProps> = ({temp, date, icon, posX}) => {
    const degreeCelsiusTemp = Math.floor(temp - 273);
    const arr = date.split(' ');
    const doneDate = arr[0].split('-').reverse().join('.');
    const time = arr[1].split(':');
    time.pop();
    const doneTime = time.join(':');

    return (
        <div className={styles.chunk} style={{transform: `translate(${posX}px, 0)`}}>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
            <h3>{degreeCelsiusTemp} °</h3>
            <div className={styles.date}>
                <p className={styles.time}>{doneTime}</p>
                <p className={styles.dateDay}>{doneDate}</p>
            </div>
        </div>
    );
}

export default OneChunk; 