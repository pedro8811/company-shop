import React, { useState, componentDidMount } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai'
import {BsFillGridFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import {
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
} from "@mui/material";

import shirt from '../assets/img/shirt.jpg'
import pants from '../assets/img/calça.jpg'
import jacket from '../assets/img/jaqueta.jpg'
import skirt from '../assets/img/skirt.jpg'
import dress from '../assets/img/vestido.jpg'
import overcoat from '../assets/img/sobretudo.jpg'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:'0 0 0 1px rgb(16 22 26 / 40%)',
  backgroundColor: '#2e2e2e',
  backgroundImage:'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto #00000099',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#212121',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:'rgba(57,75,89,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#474747',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#404040',
  },
});


function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}




const Main = styled.div`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    background-color: #ffffff;
    border-top: 1px solid #bcbcbc;
    padding: 10px 0px;
    margin: 0 15px;
    column-gap: 10px;
    row-gap: 10px;
    color: black;
    .product-card {
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,.5);
      padding: 150px 0px;
      color: black;
      background-color: white;
    }
  }


  .filter {
    background-color: #fff;
    width: 100%;
    padding: 5px 0;
    margin: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
      /* Radio Button Form  */
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
  }
  .black-button{
    color: #000;
  }
  .normal-button{
    
  }
  .grid-select{
    display: flex;
    flex-direction: row;
  }
  .font-default{
    font-family: 'Lora';
    font-weight: 400;
    font-size: 1.3rem;
    span{
      font-family: 'Lora';
      font-weight: 500;
    }
  }
`;

export default function ProductPage() {
  // const [order, setOrder] = useState("");
  // const [gridstyle, setGrid] = useState()
  // const [list, setList] = useState()
  
  // const grid = ;

  let qtd = `${document.querySelectorAll(".product-grid > div").length} products`

  return (
    <Main>
      <Header />
      <PromoBanner />
      <div className="filter">



      <FormControl>
        <FormLabel id="demo-customized-radios" className="text-dark font-default">Gender</FormLabel>
        <RadioGroup
          defaultValue="female"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
          className="d-flex flex-row"
          >
          <FormControlLabel value="female" control={<BpRadio />} className="font-default" label="Male"/>
          <FormControlLabel value="male" control={<BpRadio />} className="font-default" label="Female" />
          <FormControlLabel value="other" control={<BpRadio />} className="font-default" label="All" />
        </RadioGroup>
      </FormControl>



        <div className="length">{qtd}</div>
        <FormControl className="select">
          <label htmlFor="order">order by</label>
          <select name="order" className="select-input rounded">
            <option defaultValue>none</option>
            <option value="">alphabetical order</option>
            <option value="">lowest price</option>
            <option value="">highest price</option>
          </select>
        </FormControl>
        <FormControl className="grid-select">
          <IconButton>
            <BsFillGridFill></BsFillGridFill>
          </IconButton>
          <IconButton className="list-button">
            <FaThList></FaThList>
          </IconButton>
        </FormControl>
      </div>
      <div className="product-grid" id="grid">
        <ProductCard name="mirror balenciaga t-shirt medium fit" value="450" image={shirt} stars="0.5"></ProductCard>
        <ProductCard name="university jacket baggy" value="535" image={jacket} stars="1"></ProductCard>
        <ProductCard name="large baggy pants" value="339" image={pants} stars="1.5"></ProductCard>
        <ProductCard name="a-line baggy skirt" value="399" image={skirt} stars="2"></ProductCard>
        <ProductCard name="superlong stretch dress" value="449" image={dress} stars="2.5"></ProductCard>
        <ProductCard name="overcoat" value="649" image={overcoat} stars="3"></ProductCard>
        <ProductCard name="mirror balenciaga t-shirt medium fit" value="450" image={shirt} stars="3.5"></ProductCard>
        <ProductCard name="university jacket baggy" value="535" image={jacket} stars="4"></ProductCard>
        <ProductCard name="large baggy pants" value="339" image={pants} stars="4.5"></ProductCard>
        <ProductCard name="a-line baggy skirt" value="399" image={skirt} stars="5"></ProductCard>
        <ProductCard name="superlong stretch dress" value="449" image={dress} stars="2.5"></ProductCard>
        <ProductCard name="overcoat" value="649" image={overcoat} stars="3"></ProductCard>
        <ProductCard name="mirror balenciaga t-shirt medium fit" value="450" image={shirt} stars="0.5"></ProductCard>
        <ProductCard name="university jacket baggy" value="535" image={jacket} stars="1"></ProductCard>
        <ProductCard name="large baggy pants" value="339" image={pants} stars="1.5"></ProductCard>
        <ProductCard name="a-line baggy skirt" value="399" image={skirt} stars="2"></ProductCard>
        <ProductCard name="superlong stretch dress" value="449" image={dress} stars="2.5"></ProductCard>
        <ProductCard name="overcoat" value="649" image={overcoat} stars="3"></ProductCard>
        <ProductCard name="mirror balenciaga t-shirt medium fit" value="450" image={shirt} stars="0.5"></ProductCard>
        <ProductCard name="university jacket baggy" value="535" image={jacket} stars="1"></ProductCard>
        <ProductCard name="large baggy pants" value="339" image={pants} stars="1.5"></ProductCard>
        <ProductCard name="a-line baggy skirt" value="399" image={skirt} stars="2"></ProductCard>
        <ProductCard name="superlong stretch dress" value="449" image={dress} stars="2.5"></ProductCard>
        <ProductCard name="overcoat" value="649" image={overcoat} stars="3"></ProductCard>
        <ProductCard name="mirror balenciaga t-shirt medium fit" value="450" image={shirt} stars="0.5"></ProductCard>
        <ProductCard name="university jacket baggy" value="535" image={jacket} stars="1"></ProductCard>
        <ProductCard name="large baggy pants" value="339" image={pants} stars="1.5"></ProductCard>
        <ProductCard name="a-line baggy skirt" value="399" image={skirt} stars="2"></ProductCard>
      </div>
      <Footer />
    </Main>
  );
}
