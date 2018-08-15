import React, { Component } from 'react';
import './App.css';

import Thumbnail from './components/Thumbnail';
import Character from './components/Character';

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

const requestURL = `${config.protocol}://${config.domain}:${config.port}/v1/public/characters?limit=100&ts=${ts}&apikey=${config.publicKey}&hash=${hash}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      fetching: true,
      selected: {
        name: `Character's name`,
        description: `No character selected`,
        thumb: `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif`
      }
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
      .catch(error => console.error(`Fetch error: ${error}`))
    });
  }

  componentDidMount() {
    this.fetchCaracters(requestURL)
    .then(heroes => {
      console.log({heroes});
      let characters = [];
      heroes.forEach(hero => {
        characters.push({
          id: hero.id,
          name: hero.name,
          thumb: `${hero.thumbnail.path}/standard_xlarge.${hero.thumbnail.extension}`
        });
      });
      characters = characters.filter(caracter => {
        return (caracter.thumb !== `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg` && caracter.thumb !== `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708/standard_xlarge.gif`);
      });
      this.setState({
        characters: characters,
        fetching : false
      })
    });
  }

  render() {
    const { fetching, characters, selected } = this.state;

    return (
      <div className="App">
      <div><img className="logo" src="assets/images/MarvelLogo.svg" alt="Marvel logo" /></div>
      <h1 className="title">Characters Library</h1>
      <Character name={selected.name} image={selected.thumb} desc={selected.description} />
      { fetching ? ( <p>Loading...</p> ) : <Thumbnail data={characters} /> }
      </div>
    );
  }
}

export default App;
