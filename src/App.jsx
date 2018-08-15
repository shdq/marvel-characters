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
        id: 0,
        name: `Character's name`,
        description: `No character selected`,
        path: `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708`,
        extension: `gif`
      }
    }
    this.handleClick = this.handleClick.bind(this);
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
          description: hero.description,
          path: hero.thumbnail.path,
          extension: hero.thumbnail.extension
        });
      });
      characters = characters.filter(caracter => {
        return (caracter.path !== `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available` && caracter.path !== `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708`);
      });
      this.setState({
        characters: characters,
        fetching : false
      })
    });
  }

  handleClick(character) {
    console.log('Click');
    this.setState({
      selected: {
        id: character.id,
        name: character.name,
        description: character.description,
        path: `${character.path}/detail`,
        extension: character.extension
      }
    })
  }

  render() {
    const { fetching, characters, selected } = this.state;

    return (
      <div className="App">
      <div><img className="logo" src="assets/images/MarvelLogo.svg" alt="Marvel logo" /></div>
      <h1 className="title">Characters Library</h1>
      <Character name={selected.name} image={`${selected.path}.${selected.extension}`} desc={selected.description} />
      { fetching ? ( <p>Loading...</p> ) : <Thumbnail data={characters} handleClick={this.handleClick} /> }
      </div>
    );
  }
}

export default App;
