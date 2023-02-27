import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { TextField } from "@mui/material";
import { BsCheckLg } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

const Title = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #323232;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  transition: all 0.1s linear;
  &:hover {
    background-color: #1e1e1e;
  }
`;

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  max-width: 350px;
  padding: 50px;
  border-radius: 5px;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const LabelSingIn = styled.label`
  font-size: 16px;
  color: #676767;
`;

const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  const registerCheck = () => {
    document.getElementById("register-text").style.display = "none";
    document.getElementById("icon-check").style.display = "flex";
  };

  const handleClick = () => {
    setTimeout(handleSignup, 2000);
    if(!error){
      registerCheck();
    }
  };

  return (
    <Container>
      <Content>
        <Title className="title">Fire Company.</Title>
        <Label>register</Label>
        <TextField
          fullWidth
          color="grey"
          label="E-mail"
          variant="standard"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        ></TextField>
        <TextField
          fullWidth
          color="grey"
          label="Confirm your e-mail"
          variant="standard"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        ></TextField>
        <TextField
          fullWidth
          color="grey"
          label="Password"
          type="password"
          variant="standard"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        ></TextField>
        <LabelError>{error}</LabelError>
        <Button
          onClick={handleClick}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all .2s linear",
          }}>
          <div
            id="icon-check"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .2s linear",
            }}>
            <p style={{margin: 0, marginRight: 8 + 'px'}}>Registered</p>
            <BsCheckLg style={{fontSize: 20 + 'px'}}></BsCheckLg>
          </div>
          <p id="register-text" style={{ margin: 0, display: "block" }}>
            Register
          </p>
        </Button>
        <LabelSingIn>
          Already have an account?
          <Strong>
            <Link to="/">&nbsp;Login!</Link>
          </Strong>
        </LabelSingIn>
      </Content>
    </Container>
  );
}
