import React from 'react';

// import './Image.css';

class Image extends React.Component {
  render() {
    return (
      <img className={this.props.imageClass} src={this.props.src} alt={this.props.alt} />
    );

  }
}

export default Image;

