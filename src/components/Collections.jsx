import React from "react";
import styled from "styled-components";
import jaqueta from '../assets/img/jaqueta.jpg'
import calça from '../assets/img/calça.jpg'
import camiseta from '../assets/img/camiseta.jpg'
import vestido from '../assets/img/vestido.jpg'
import skirt from '../assets/img/skirt.jpg'
import sobretudo from '../assets/img/sobretudo.jpg'

const Cards = styled.div`
  text-align: center;
  width: 100%;
  h1{
    font-weight: 500;
  }
  .men-container{
    margin: 20px 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 768px){
      grid-template-columns: repeat(1, 1fr);
      .product-card{
        margin-bottom: 1rem;
      }
    }
    grid-column-gap: 40px;
    .product-card{
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        width: 100%;
      }
      p{
        margin: 0;
        font-size: 1.1em;
      }
      button{
        background: white;
        border: 1px solid black;
        font-family: inherit;
        font-size: 1.2em;
        padding: 5px 10px;
        margin: 20px;
      }
      button:hover{
        background: black;
        color: white;
        cursor: pointer;
      }
    }
  }
`
const Title = styled.h1`
  font-weight: 500;
  margin: 10px 0px;
`

export default function Collections(){
  return(
    <Cards>
      <Title>New All Black Men Collection</Title>
      <div className="men-container">
        <div className="product-card">
          <img src={camiseta} alt="" />
          <p>shirt balenciaga logo</p>
          <button>Check Out</button>
        </div>
        <div className="product-card">
          <img src={calça} alt="" />
          <p>large baggy jeans</p>
          <button>Check Out</button>
        </div>
        <div className="product-card">
          <img src={jaqueta} alt="" />
          <p>large baggy jacket</p>
          <button>Check Out</button>
        </div>
      </div>

      <Title>New All Black Women Collection</Title>
      <div className="men-container">
        <div className="product-card">
          <img src={vestido} alt="" />
          <p>large dress</p>
          <button>Check Out</button>
        </div>
        <div className="product-card">
          <img src={skirt} alt="" />
          <p>baggy jeans skirt</p>
          <button>Check Out</button>
        </div>
        <div className="product-card">
          <img src={sobretudo} alt="" />
          <p>above all black</p>
          <button>Check Out</button>
        </div>
      </div>
    </Cards>
  )
}