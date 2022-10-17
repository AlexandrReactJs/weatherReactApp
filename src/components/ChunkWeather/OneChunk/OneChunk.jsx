import React from 'react'
import styles from './OneChunk.module.css'

const OneChunk = ({temp, date, icon, posX}) => {
    let degreeCelsiusTemp = Math.floor(temp - 273);
  return (
    <div className={styles.chunk} style={{transform: `translate(${posX}px, 0)`}}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}  />
        <h3>{degreeCelsiusTemp}</h3>
        <p>{date}</p>
    </div>
  )
}


export default OneChunk;
