import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
      
    <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
          </div>
        </div>
      </div>
      
    </NavLink>
    </Wrapper>
  );
};
const Wrapper= styled.section`
box-shadow: 10px 10px 20px 10px #999;
border-radius:2rem;
`
export default Product;