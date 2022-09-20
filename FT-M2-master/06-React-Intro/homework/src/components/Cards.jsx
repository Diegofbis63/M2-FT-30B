import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
//   return <div>Cards Component</div>
// };

const { cities } = props;
  return (
    <div className="cards">
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
}