import React from 'react';
import Card from './Card';
import s from "./Cards.module.css"

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const { cities } = props;
  return (
    <div className={s.multiCards}>
      {cities.map((card, index) => (
        <Card
        key={card.id}
        max={card.main.temp_max}
        min={card.main.temp_min}
        name={card.name}
        img={card.weather[0].icon}
        onClose={() => alert(card.name)}
      />
      ))}
    </div>
  );
};