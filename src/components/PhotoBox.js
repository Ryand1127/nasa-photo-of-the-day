import React from 'react'
import styled from 'styled-components'

const StyledPhotoBox = styled.div`

  img{
    border-radius: 15px 15px;
    box-shadow: 10px 10px 5px gray;
    width: 75%;
  }


`
const StyledPBoxText = styled.div`

  background-color: #e8122b;
  max-width: 75%;
  margin: 0 auto;
  border-radius: 15px 15px;
  color: white;
`

function PhotoBox(props) {



  return (
    <StyledPhotoBox>
      {props.media === "image" ? ( <img src={props.imgSrc} alt={props.imgAlt} /> ) : (<iframe src={props.imgSrc} title={props.imgAlt} />)}
      <StyledPBoxText>
      <p>{props.imgExp}</p>
      <p>{props.copyright}</p>
      <p>{props.date}</p>
      </StyledPBoxText>
    </StyledPhotoBox>
  )
}

export default PhotoBox
