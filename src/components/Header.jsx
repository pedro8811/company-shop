import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IconButton, Tooltip } from "@mui/material";

const Header = styled.header`
  background-color: #f6f6f6;
  border-bottom: 1px solid #858585;
  text-transform: uppercase;
  div {
    padding: 5px 30px;
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
    .title {
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
    .nav-li {
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
      color: #686868;
      transition: color 0.5s linear;
    }
    .nav-li:hover {
      text-decoration: none;
      color: black;
    }
  }
  .auth {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: 180px;
    display: flex;
    justify-content: space-around;
    color: #686868;
    align-items: center;
    .auth-li {
      color: #686868;
      text-decoration: none;
      padding: 0px;
      transition: all 0.2s linear;
    }
    .auth-li:hover {
      color: black;
      cursor: pointer;
    }
  }
  .fsvinte {
    font-size: 20px;
  }
  .dsnone {
    display: none;
  }
`;

export default function Nav() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const navbar = document.getElementsByClassName("nav");

  return (
    <Header>
      <div>
        <div className="logo">
          {/* <IoColorFilterSharp id="icon" /> */}
          <h1 className="title">Fire Company.</h1>
        </div>
        <ul className="nav">
          <Link to="/home" className="nav-li">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-li">
            <li>Products</li>
          </Link>
          <Link to="/contact" className="nav-li">
            <li>Contact</li>
          </Link>
          <Link to="/aboutus" className="nav-li">
            <li>About Us</li>
          </Link>
        </ul>
        <ul className="auth">
          <Tooltip title="Search">
            <IconButton>
              <IoSearchOutline className="auth-li fsvinte"></IoSearchOutline>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton>
              <IoCartOutline className="auth-li fsvinte"></IoCartOutline>
            </IconButton>
          </Tooltip>
          <Link onClick={() => [signout(), navigate("/")]} className="auth-li">
            Log Out
          </Link>
        </ul>
      </div>
    </Header>
  );
}
