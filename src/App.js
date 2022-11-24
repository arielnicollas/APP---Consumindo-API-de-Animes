import React from 'react';
import './style.css';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const [dataName, setData] = useState({});

  const getAPI = () => {
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => response.json())
      .then((data) => setData(data));

    console.log(dataName);
  };

  return (
    <div class="bg-midnight">
      <h1 class="text-3xl font-bold underline">Falas marcantes de Animes</h1>
      <span>Anime: {dataName.anime}</span>
      <br />
      <br />
      <span>Personagem: {dataName.character}</span>
      <br />
      <br />
      <span>Fala de impacto: {dataName.quote}</span>
      <br />
      <br />
      <button variant="info" onClick={getAPI}>
        Mostrar
      </button>
    </div>
  );
}
