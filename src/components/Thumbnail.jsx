import React from 'react';

import './Thumbnail.css';

class Thumbnail extends React.Component {
  render() {
    return (
      <div className="scrolling-line">
        {
          this.props.data.map(character => {
            return <img className="thumbnail" src={`${character.path}/standard_medium.${character.extension}`} alt={character.name} key={character.id.toString()} onClick={this.props.handleClick.bind(this, character)} />
          })
        }
      </div>
    );
  }
}

export default Thumbnail;

