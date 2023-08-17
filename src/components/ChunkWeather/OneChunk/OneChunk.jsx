import React from 'react'
import styles from './OneChunk.module.css'

const OneChunk = ({temp, date, icon, posX}) => {
    let degreeCelsiusTemp = Math.floor(temp - 273);
    let arr = date.split(' ')
    let doneDate  = arr[0].split('-').reverse().join('.')
    let time = arr[1].split(':')
    time.pop()
    let doneTime = time.join(':')
    return (
    <div className={styles.chunk} style={{transform: `translate(${posX}px, 0)`}}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}  />
        <h3>{degreeCelsiusTemp} °</h3>
        <div className={styles.date}>
          <p className={styles.time}>{doneTime}</p>
          <p className={styles.dateDay}>{doneDate}</p>
        </div>
    </div>
  )
}


export default OneChunk;
