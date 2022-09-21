import React from 'react';
import s from "./Card.module.css"

export default function Card(props) {
  // acá va tu código
  return <div className={s.mainContainer}>
    <button className={s.button} onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div className={s.column}>
      <p>Min</p>
      <p className={s.min}>{props.min}</p>
      <p>Max</p>
      <p className={s.max}>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
    </div>
    
  </div>
};