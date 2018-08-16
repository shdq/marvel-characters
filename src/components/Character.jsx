import React from 'react';

import './Character.css';

class Character extends React.Component {
  render() {
    const detailsUrl = this.props.urls.map((link, i) => { 
      if(link.type === 'detail')
        return <li className="character__urls-list-item" key={i}><a className="link" href={link.url} rel="noopener" target="_blank">{this.props.name} on marvel.com</a></li>
    })
    return (
      <div className="character">
        <img className="character__image" src={this.props.image} alt={this.props.name} />
        <h2 className="character__name">{this.props.name}</h2>
        <p className="character__description">{this.props.desc}</p>
        <ul className="character__urls-list">{detailsUrl}</ul>
      </div>
    );
  }
}

export default Character;