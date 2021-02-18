import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from "./components/Header";
import PhotoBox from "./components/PhotoBox";
import axios from 'axios';
import Footer from './components/Footer';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #e6e6e6
`


function App() {


  const [nasaData, setNasaData] = useState({})

  function getData() {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=78ZqNbNAklbSbejctPmiB8D0pzwfqI8k4XGitcGH'
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
    <StyledApp className="App">
      <Header imgAlt={nasaData.title}/>
      <PhotoBox imgSrc={nasaData.url} imgAlt={nasaData.title} imgExp={nasaData.explanation} media={nasaData.media_type} copyright={nasaData.copyright} date={nasaData.date}/>
      <Footer/>
    </StyledApp>
  );
}

export default App;
