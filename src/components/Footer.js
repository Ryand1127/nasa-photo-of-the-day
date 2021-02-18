import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`

background-color: #0e5199;
color: white;
padding-top: 2%;

    img{
        width: 175px;
    }

    p{
        font-size: 1.6rem;
    }
`

function Footer(){

    return(
    <StyledFooter>
     <p>Check out Nasa for more!</p> 
     <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/> 
     </StyledFooter>
    )    

}


export default Footer 