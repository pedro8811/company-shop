import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai'
import {BsFillGridFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  IconButton
} from "@mui/material";

const Main = styled.div`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-area: ". . . . .";
    background-color: #ffffff;
    margin: 10px 5px;
    color: black;
    column-gap: 5px;
    row-gap: 5px;
    .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    .div4 {
      grid-area: 1 / 4 / 2 / 5;
    }
    .div5 {
      grid-area: 1 / 5 / 2 / 6;
    }
    .div6 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div7 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .div8 {
      grid-area: 2 / 3 / 3 / 4;
    }
    .div9 {
      grid-area: 2 / 4 / 3 / 5;
    }
    .div10 {
      grid-area: 2 / 5 / 3 / 6;
    }
    .div11 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div12 {
      grid-area: 3 / 2 / 4 / 3;
    }
    .div13 {
      grid-area: 3 / 3 / 4 / 4;
    }
    .div14 {
      grid-area: 3 / 4 / 4 / 5;
    }
    .div15 {
      grid-area: 3 / 5 / 4 / 6;
    }
    .div16 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .div17 {
      grid-area: 4 / 2 / 5 / 3;
    }
    .div18 {
      grid-area: 4 / 3 / 5 / 4;
    }
    .div19 {
      grid-area: 4 / 4 / 5 / 5;
    }
    .div20 {
      grid-area: 4 / 5 / 5 / 6;
    }
    .div21 {
      grid-area: 5 / 1 / 6 / 2;
    }
    .div22 {
      grid-area: 5 / 2 / 6 / 3;
    }
    .div23 {
      grid-area: 5 / 3 / 6 / 4;
    }
    .div24 {
      grid-area: 5 / 4 / 6 / 5;
    }
    .div25 {
      grid-area: 5 / 5 / 6 / 6;
    }
    .product-card {
      padding: 150px 0px;
      color: black;
      border: 1px solid black;
      background-color: white;
    }
  }
  .filter {
    margin: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .genre {
      #form {
        margin: 0;
        display: flex;
        flex-direction: row;
        span {
          font-family: "Lora";
          font-weight: 500;
        }
      }
      h4 {
        font-size: 1.3rem;
        margin: 0;
      }
    }
  }
  .length{
    font-size: 1.3rem;
  }
  .select{
    display: flex;
    flex-direction: row;
    font-family: 'Lora';
    label{
      font-size: 1.3rem;
      margin-right: 5px;
    }
    .select-input{
      padding: 6px 20px 6px 6px;
    }
  }
  .black-button{
    color: #000;
  }
  .normal-button{
    
  }
`;

export default function ProductPage() {
  const [order, setOrder] = useState("");
  const [gridstyle, setGrid] = useState()
  const [list, setList] = useState()
  
  const handleGrid = e => {
    setGrid(!gridstyle)
  }
  
  const grid = document.querySelectorAll(
    ".product-grid > .product-card"
  ).length;

  return (
    <Main>
      <Header />
      <PromoBanner />
      <div className="filter">
        <div className="genre">
          <h4>genre</h4>
          <FormGroup id="form">
            <FormControlLabel control={<Checkbox color="default" size="small" style={{ padding: 0, marginLeft: '10px' }}/>}
              label="Male"/>
            <FormControlLabel control={<Checkbox color="default" size="small"  style={{ padding: "0" }}/>}
              label="Female"/>
          </FormGroup>
        </div>
        <div className="length">{grid} products</div>
        <FormControl className="select">
          <label htmlFor="order">order by</label>
          <select name="order" className="select-input">
            <option defaultValue>none</option>
            <option value="">alphabetical order</option>
            <option value="">lowest price</option>
            <option value="">highest price</option>
          </select>
        </FormControl>
        <div className="grid-select">
          <IconButton onClick={() => setGrid(!gridstyle)} className="">
            <BsFillGridFill></BsFillGridFill>
          </IconButton>
          <IconButton onClick={handleGrid} className="list-button">
            <FaThList></FaThList>
          </IconButton>
        </div>
      </div>
      <hr style={{ margin: 0 }}></hr>
      <div className="product-grid" id="grid">
        <div className="div1 product-card">1</div>
        <div className="div2 product-card">2</div>
        <div className="div3 product-card">3</div>
        <div className="div4 product-card">4</div>
        <div className="div5 product-card">5</div>
        <div className="div6 product-card">6</div>
        <div className="div7 product-card">7</div>
        <div className="div8 product-card">8</div>
        <div className="div9 product-card">9</div>
        <div className="div10 product-card">10</div>
        <div className="div11 product-card">11</div>
        <div className="div12 product-card">12</div>
        <div className="div13 product-card">13</div>
        <div className="div14 product-card">14</div>
        <div className="div15 product-card">15</div>
        <div className="div16 product-card">16</div>
        <div className="div17 product-card">17</div>
        <div className="div18 product-card">18</div>
        <div className="div19 product-card">19</div>
        <div className="div20 product-card">20</div>
        <div className="div21 product-card">21</div>
        <div className="div22 product-card">22</div>
        <div className="div23 product-card">23</div>
        <div className="div24 product-card">24</div>
        <div className="div25 product-card">25</div>
      </div>
      <Footer />
    </Main>
  );
}
