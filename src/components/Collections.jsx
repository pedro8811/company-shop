import React from "react";
import styled from "styled-components";
import jaqueta from '../assets/img/jaqueta.jpg'
import calça from '../assets/img/calça.jpg'
import camiseta from '../assets/img/camiseta.jpg'
import vestido from '../assets/img/vestido.jpg'
import skirt from '../assets/img/skirt.jpg'
import sobretudo from '../assets/img/sobretudo.jpg'
import { Button } from "./styles";

const Cards = styled.div`
  text-align: center;
  width: 100%;
  border-bottom: 1px solid black;
  h1{
    font-weight: 500;
  }
  .men-container{
    margin: 20px 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    .product-card{
      /* border-radius: 10px; */
      /* box-shadow: 0 0 10px rgba(0,0,0,.5); */
      border: 1px solid black;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        width: 320px;
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

export default function Collections(){
  return(
    <Cards>
      <h1>New All Black Men Collection</h1>
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

      <h1>New All Black Women Collection</h1>
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