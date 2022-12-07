import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [dataName, setData] = useState({});

  const getAPI = () => {
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Animes Legend's</h1>
        <span className="name-anime">
          <label className='style-label'>Nome do Anime: </label> 
          {dataName.anime}</span>

        <span className="name-character">
          <label className='style-label'> Personagem: </label>
           {dataName.character}
          </span>

        <span className="talk-character">
          <label className='style-label'>Fala do personagem: </label>
           "{dataName.quote}"
        </span>

        <button className="btn-next" onClick={getAPI}>
          Próximo
        </button>
      </div>
    </div>
  );
}
