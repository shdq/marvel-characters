import React, { Component } from 'react';
import './App.css';

import Thumbnail from './components/Thumbnail';

import md5 from 'md5';

const config = {
  protocol: 'https',
  domain: 'gateway.marvel.com',
  port: '443',
  publicKey : `${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`,
  privateKey : `${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}`,
  characters: 'characters'
}

let ts = new Date().getTime().toString();
let hash = md5(ts + config.privateKey + config.publicKey);

const requestURL = `${config.protocol}://${config.domain}:${config.port}/v1/public/characters?limit=50&ts=${ts}&apikey=${config.publicKey}&hash=${hash}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbs: [],
      fetching : true
    }
  }
  
  fetchCaracters = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => {
        if(response.status !== 200 ) {
          reject(Error(`Looks like there was a problem. Status Code: ${response.status}`));
        }
        response.json()
        .then(data => {
          resolve(data.data.results);
        })
      })
      .catch(error => console.log(`Fetch error: ${error}`))
    });
  }

  componentDidMount() {
    this.fetchCaracters(requestURL)
  .then(heroes => {
    console.log({heroes});
    let thumbs = [];
    heroes.forEach(hero => {
      if(hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') thumbs.push(`${hero.thumbnail.path}.${hero.thumbnail.extension}`);
    });
    this.setState({
      thumbs: thumbs,
      fetching : false
    })
  });
  }
  
  render() {
    const { fetching, thumbs } = this.state;

    return fetching ? ( <p>Загрузка...</p> ) : (
      <div className="App">
      <h1 className="title">MARVEL Caracters Library</h1>
      <div className="scrolling-line">
        {
          thumbs.map(thumb => {
            return <Thumbnail src={thumb} alt='' />
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
