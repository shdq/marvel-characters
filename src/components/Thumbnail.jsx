import React from 'react';

import './Thumbnail.css';

function Thumbnail(props) {
  return (
    <img src={props.src} className="thumbnail" />
  );
}

export default Thumbnail;