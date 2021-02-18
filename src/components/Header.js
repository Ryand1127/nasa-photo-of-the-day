import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    text-align: center;
    background: linear-gradient(#0e5199, #e8122b);
    
    height: 15vh;
    padding-top: 0.5%;
    padding-bottom: 3.5%;
    margin-bottom: 2%;

    h1{
        font-size: 2.4rem;
        background-color: white;
        width: 40%;
        margin: 2% auto 2% auto;
        border-radius: 10px 10px;

        &:hover{
            background-color: #e8122b; 
            color: white;
        }
    }

    h2{
        color: white;
        background-color: #0e5199;
        width: 35%;
        margin: 0 auto 2% auto;
        border-radius: 15px 15px;

        &:hover{
            transform: scale(1.2);
        }
    }


`

function Header(props) {

    return(
        <StyledHeader>
        <h1>Nasa Photo of the Day!</h1> 
        <h2>{props.imgAlt}</h2>
        </StyledHeader> 
    );
}

export default Header 