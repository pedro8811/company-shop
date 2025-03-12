import React from "react";
import styled from "styled-components";
import { 
  Button,
  Checkbox,
} from "@mui/material";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ProductStars from "./ProductStars";

const Main = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 15px 0px;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  img {
    margin: auto;
    width: 100%;
    transition: all .2s ease;
    z-index: 1;
    &:hover{
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h1`
  font-size: 1.1em;
  z-index: 2;
  font-weight: 300;
  margin-bottom: 30px;
`;

const Values = styled.div`
  padding: 5px;
  margin-top: 10px;
  width: 100%;
  margin: auto;
  border: 1px solid black;
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 700;
  p {
    font-size: 0.6em;
    font-weight: 400;
    margin: 0;
  }
`;

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
`;

const ShipStar = styled.div`
  border: 1px solid black;
  border-right: none;
  p {
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  .buy-button {
    font-family: 'Lora';
    border: none;
    margin-top: 15px;
    font-size: 1.2em;
    background-color: #ffffff;
    color: #000;
    transition: all 0.1s linear;
  }
  .buy-button:hover {
    border: none;
    color: #fff;
    background-color: #282828;
  }
`

export default function ProductCard(props) {
  const value = props.value;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <Main>
      <img src={props.image} alt="camiseta" />
      <Title>{props.name}</Title>
      <DoubleGrid>
        <Values>
          $ {value},00<p>&nbsp;or 10x in credit card</p>
        </Values>
        <ShipStar>
            <ProductStars star={props.stars}/>
          <p>FREE SHIPPING</p>
        </ShipStar>
      </DoubleGrid>
      <Bottom>
        <Button variant="outlined" size="small" className="buy-button">
          Check
        </Button>
        <div>
          <Checkbox {...label} icon={<MdFavoriteBorder style={{fontSize: 1.4 + 'em'}} />} checkedIcon={<MdFavorite style={{color: 'black', fontSize: 1.4 + 'em'}} />} />
        </div>
      </Bottom>
    </Main>
  );
}
