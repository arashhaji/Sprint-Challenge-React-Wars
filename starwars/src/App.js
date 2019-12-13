// import React from 'react';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsChar from "./components/StarWarsChar"

const App = () => {
  const [starWarschar, setStarWarsChar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios.get(`https://swapi.co/api/people/`).then(resp => {
      setStarWarsChar(resp.data.results);
      console.log(resp.data.results);

     });
  }, []);


  return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      {starWarschar.map(char => {
      return <StarWarsChar char={char} key={char.name} />
      })}
   </div>
    );
  }

export default App;
