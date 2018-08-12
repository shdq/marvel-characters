import React from 'react';

import './Thumbnail.css';

function Thumbnail(props) {
  return (
    <img className="thumbnail" src={props.src} alt={props.name} />
  );
}

export default Thumbnail;