import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from "./components/Header";
import PhotoBox from "./components/PhotoBox";
import axios from 'axios';

function App() {


  const [nasaData, setNasaData] = useState({})

  function getData() {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=1u2MxYeEkxOXBZ9jVFCWVpTr27aiJLFkjGf4Uvrg'
      )
      .then((res) => {
          setNasaData(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  useEffect(getData, [])

  console.log(nasaData)
  return (
    <div className="App">
      <Header/>
      <PhotoBox imgSrc={nasaData.url} imgAlt={nasaData.title} imgExp={nasaData.explanation} media={nasaData.media_type}/>
    </div>
  );
}

export default App;
