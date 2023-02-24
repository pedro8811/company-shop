import React from "react";
import styled from "styled-components";

const Main = styled.div`
  margin: 0;
  background-color: #000;
  padding: 0px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
  ul{
    margin: 5px 0px;
    list-style-type: none;
    padding: 10px;
    /* border: 1px solid white; */
    li{
      margin-bottom: 10px;
      a{
        color: white;
        text-decoration: none;
      }
    }
    li a:hover{
      text-decoration: underline;
    }
    h1{
      font-size: 1.3em;
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 3px;
      margin: 0 0 10px 0;
    }
  }
  .br-none{
    border-right: none;
  }
`

export default function Footer(){
  return(
    <Main>
      <ul className="br-none">
        <h1>Newsletter</h1>
        <li><a href="#">Subscribe to newsletter</a></li>
      </ul>
      <ul className="br-none">
        <h1>CLIENT SERVICES</h1>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Delivery</a></li>
        <li><a href="#">Payment</a></li>
      </ul>
      <ul className="br-none">
        <h1>SOCIALS</h1>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Tiktok</a></li>
      </ul>
      <ul>
        <h1>THE COMPANY</h1>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Careers - Design</a></li>
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy Policy and Cookies</a></li>
        <li><a href="#">World Food Programme</a></li>
      </ul>
    </Main>
  )
}