import React from "react";
import styled from "styled-components";
import { IoColorFilterSharp, IoSearchOutline } from "react-icons/io5";

const Header = styled.header`
  border-bottom: 1px solid grey;
  box-shadow: 0 0 20px rgba(0,0,0,.9);
  background-color: #fff;
  div{
    padding: 10px 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  .logo {
    padding: 0;
    display: flex;
    align-items: center;
    #icon {
      color: black;
      font-size: 2.3em;
      margin-right: 12px;
    }
    .title{
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 1.9em;
      font-weight: 500;
      color: black;
      margin: 0;
    }
  }
  .nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    li{
      cursor: pointer;
      font-size: 1.1em;
      color: black;
      transition: color .5s linear;
    }
    li:hover{
      color: black;
    }
  }
  .auth{
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    .auth-li{
      font-size: 1.2em;
      margin-left: 30px;
      padding: 10px;
      border-radius: 30px;
      transition: all .2s linear;
    }
    .auth-li:hover{
      background-color: #e0e0e0;
      cursor: pointer;
    }
    .auth-li:nth-child(3){
      border: 1px solid #e0e0e0;
    }
  }
`;

export default function Nav() {
  return (
    <Header>
      <div>
        <div className="logo">
          {/* <IoColorFilterSharp id="icon" /> */}
          <h1 className="title">Fire Company</h1>
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <ul className="auth">
          <IoSearchOutline className="auth-li"></IoSearchOutline>
          <li className="auth-li">Login</li>
          <li className="auth-li">Sign Up</li>
        </ul>
      </div>
    </Header>
  );
}
