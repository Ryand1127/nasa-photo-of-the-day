import React from 'react'


function PhotoBox(props) {

  return (
    <div>
     {props.media === "image" ? ( <img src={props.imgSrc} alt={props.imgAlt} /> ) : (<iframe src={props.imgSrc} title={props.imgAlt} />)}
      <p>{props.imgExp}</p>
    </div>
    
  )
}

export default PhotoBox
