import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm() {
  const [searchSomething, setSearchSomething] = useState('');
  const [searchResult, setSearchResult] = useState(characters);

  const inputHandler = e => {
    setSearchSomething(e.target.value);
  };

  useEffect(() => {
    let results = characters.filter(character =>
      character.name.toLowerCase().includes(searchSomething.toLowerCase())
      );
      setSearchResult(results);
  }, [searchSomething, characters]);
 
  return (
    <div>
    <section className="search-form">
      <label>
        <span>Search Characters: </span>
        <input 
        type='text' 
        placeholder='Enter Name' 
        onChange={inputHandler} />
        </label>
    </section>

    <section className='character-list'>
      {searchResult.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </section>
    </div>
  );
}
