import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => setCharacters(response.data.results))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <SearchForm characters={characters} />
    </div>
  );
}
