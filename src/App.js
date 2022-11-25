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
        <span className="name-anime">Nome do Anime: {dataName.anime}</span>

        <span className="name-character">Personagem: {dataName.character}</span>

        <span className="talk-character">
          Fala de Impacto: {dataName.quote}
        </span>

        <button className="btn-next" onClick={getAPI}>
          Próximo
        </button>
      </div>
    </div>
  );
}
