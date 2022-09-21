import React from 'react';
import s from "./SearchBar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div className={s.buscador}>
    <input className={s.input} type="text" placeholder='Ciudad...' />
    <button className={s.searchButton} onClick={() => props.onSearch('Buscando Ciudad')}>Agregar</button>
</div>
};