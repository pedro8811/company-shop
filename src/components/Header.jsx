import React from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #F6F6F6;
  border-bottom: 1px solid #858585;
  text-transform: uppercase;
  div{
    padding: 0px 30px;
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
      letter-spacing: 4px;
      font-size: 1.4em;
      font-weight: 600;
      color: #000000;
      margin: 0;
    }
  }
  .nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    .nav-li{
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
      color: #686868;
      transition: color .5s linear;
    }
    .nav-li:hover{
      text-decoration: none;
      color: black;
    }
  }
  .auth{
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: right;
    color: #686868;
    align-items: center;
    .auth-li{
      font-size: 1em;
      margin-left: 30px;
      padding: 10px;
      border-radius: 30px;
      transition: all .2s linear;
    }
    .auth-li:hover{
      color: black;
      cursor: pointer;
    }
    
  }
`;

export default function Nav() {
  
  
  
  return (
    <Header>
      <div>
        <div className="logo">
          {/* <IoColorFilterSharp id="icon" /> */}
          <h1 className="title">Fire Company.</h1>
        </div>
        <ul className="nav">
          <Link to="/" className="nav-li"><li>Home</li></Link>
          <Link to="/products" className="nav-li"><li>Products</li></Link>
          <Link to="/contact" className="nav-li"><li>Contact</li></Link>
          <Link to="/aboutus" className="nav-li"><li>About Us</li></Link>
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
