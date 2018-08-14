import React from 'react';

import './Character.css';

function Character(props) {
  return (
    <div className="caracter">
      <img className="caracter__image" src={props.image} alt={props.name} />
      <h2 className="caracter__name">{props.name}</h2>
      <p className="caracter__description">{props.desc}</p>
    </div>
  );
}

export default Character;