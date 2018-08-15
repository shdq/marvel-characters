import React from 'react';

import './Thumbnail.css';

class Thumbnail extends React.Component {
  render() {
    return (
      <div className="scrolling-line">
        {
          this.props.data.map(character => {
            return <img className="thumbnail" src={character.thumb} alt={character.name} key={character.id.toString()} />
          })
        }
      </div>
    );
  }
}

export default Thumbnail;