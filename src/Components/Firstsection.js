import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { useProductContext } from '../context/categoryContext';
import {Button} from '../styles/Button'

const Firstsection = () => {

  return (
  <Wrapper>
    <div className='containerf'>
        <div className='grid-two grid'>
            <div className='hero-section-data'>
                <h1>Strat Buying with Neural's Today</h1>
                <p className='intro-data'> Try Shopify for free, and explore all the services 
                  you need to buy for you.</p>
                <NavLink to="/product">
                    <Button>
                        Let's Go shoping
                    </Button>
                </NavLink>
            </div>
            <div className='hero-section-image'>
                <figure>
                {/* <img src ="images/hero-removebg.png" alt='image' className='img-style'/> */}
                </figure>

            </div>
        </div>
    </div>
  </Wrapper>
  )
}
const Wrapper =styled.section`
background-image: url("images/background.jpg");
background-size:cover;
background-position: center; 
background-repeat:no-repeat;
.containerf {
 padding: 0rem 10rem 0 10rem;
}
padding: 12rem 0;
bac
  img {
    min-width: 10rem;
    height: 10rem;
  }
 
  .hero-section-data {
    padding: 0rem;
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color:yellow;
    }
    .intro-data {
      margin-bottom: 4rem;
      font-size:3rem;
      color:white;
      font-weight:bold;
      
    }
    Button{
      width:50%;
      font-size:3rem;
      border-radius:3rem;
      background-color:yellow;
      color:black;
      font-weight:600;
    }
    .top-lists
    {
          display: inline-block;
          text-decoration: none;
          font-size: 2.2rem;
          font-weight: bold;
          text-transform: uppercase;
          color: rgb(98 84 243);
          transition: color 0.3s linear;
          margin-top:1.5rem

  }
  ul li{
    padding:0.5rem;
  }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: black;
      position: absolute;
      left: 30%;
      top: -5rem;
      z-index: -1;
    }
  }
  
  .img-style {
    width: 80%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Firstsection