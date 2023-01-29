import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useProductContext } from "../context/productcontex";
import { Button } from '../styles/Button';

export default function Menuelist() {
    const { isCloading,Cat_p } = useProductContext();
    if(isCloading)
{
  return <div>....isLoading</div>
}
  return (
    <Wrapper>
        <div className='main-menu'>
            
            <ul className='menu-lists'>
                <li>
                Latest Articles
                </li>
                <li>
                Start a Business

                </li>
                <li>
                Write a Business Plan
                </li>
                <li>
                Print on Demand
                </li>
                <li>
                Start a Podcast
                </li>
                <li>
                Affiliate Marketing
                </li>
            </ul>
        </div>
        <hr/>
        <div className='main-menu'>
        <div className='two_columns-div'>
            <div>
        <ul className='menu-lists-2'>
                <li>
                <a href='#'>Home</a>
                </li>
                <li>
                <a href='#'>Blog</a>
                </li>
                <li>
                <a href='#'>25 Best Designs To Stand Out (2023)</a>
                </li>
        </ul>
        
        <div className='main-menu'>
            <h2 className='top'>Our some of Tops sales</h2>
            <div className="grid grid-two">
            
            {
          Cat_p.map((product)=>
            {
                return(
                    <div class="card">
                      <div class="card-body">
                    <h4 class="card-title">{product.name}</h4>
                    </div>
                    <NavLink to={`/singleproduct/${product.id}`}>
                    
                    <img class="card-img-top" src={product.image} alt={product.name}/>
                    </NavLink>
                    <figcaption className="caption">{product.category}</figcaption>
                    
                    </div>                             
                    )
            })
          }
        </div>
        </div>
        </div>
        <div className='menu-img'>
            <input type="email"
                name="Email"
                placeholder="Search Favourites"
                className='search_img'
                autoComplete="off"/>
            <div className='img-style'>
                <h2 className=''> Start Your online Shoping Today.</h2>
                <h3>Sign up for Shopify's free trial to access all of 
                  the tools and services you need to start, run, and grow your business.</h3>
                   <input type="email"
                name="Email"
                placeholder="Enter your Email"
                className='search_img'
                autoComplete="off"/>
                 <Button>
                        Sign up
                  </Button>
            </div>
            <div className='bgradian'> 
            </div>
        </div>
        </div>
        </div>
    </Wrapper>

  )
}

const Wrapper=styled.section`
.card
{
  box-shadow: 10px 10px 8px 10px #8888;
}
.main-menu
{
    padding:4rem;
    position:relative;
    left:3.5%
}
.card-img-top
{
  border-radius:4rem;
  padding:2rem;
}
h2 {
  text-transform: capitalize;
  font-weight: bold;  
}
h3
{
  width:65%;
  font-weight: bold;
  color:white;
  font-size:2rem;
}
h4
{
  font-size:2.5rem;
  padding:1rem;
  text-transform: capitalize;
  font-weight:bold;
}
.menu-lists {
    display: flex;
    opacity: 80%;
    gap: 4.8rem;
    align-items: center;
    font-weight:bold;
    font-size: 2.5rem;      
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
}
.top
{
  text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    opacity:80%;
}
.menu-lists-2{
    display: flex;
    opacity: 50%;
    gap: 4.8rem;
    align-items: center;
    font-weight:bold;
    font-size: 2.5rem;      
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
}
.two_columns-div
{
        display: flex;
        gap:3.5rem;
}
.two_columns-div div{
    flex:1;
}
.menu-img
{
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.search_img
{
     text-align:center;
    font-weight:bold;
    font-size:2rem;
    border-radius:2rem;
}
.img-style{
  width: 80%;
  text-align:center;
    aspect-ratio: 1;
    border-radius: 5rem;
    background: linear-gradient(45deg,
    transparent,
    rgba(150, 68, 62, 0.8),
    transparent);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    place-items: center;
    padding-top: 10rem;
}
.bgradian
{
  width: 80%;
  text-align:center;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    place-items: center;
    padding-top: 10rem;
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }
  .caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
}
.card {
  background-color: #fff;
  border-radius: 1rem;

  .card-data {
    padding: 0 2rem;
  }

  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
  }

  
}
`;