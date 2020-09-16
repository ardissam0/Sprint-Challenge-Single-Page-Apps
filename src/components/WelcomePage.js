import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div style={{marginLeft:'28%', marginBottom:'3%',}}> 
          <Link to='/characters' className='link-characters'>
              Characters
          </Link>
        </div>
        <div style={{marginLeft:'28%',}}>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </div>
      </header>
    </section>
  );
}
