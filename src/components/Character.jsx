import React from 'react';

import './Character.css';

class Character extends React.Component {
  render() {
    return (
      <div className="caracter">
        <img className="caracter__image" src={this.props.image} alt={this.props.name} />
        <h2 className="caracter__name">{this.props.name}</h2>
        <p className="caracter__description">{this.props.desc}</p>
      </div>
    );
  }
}

export default Character;