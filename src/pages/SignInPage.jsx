import React, {useState} from "react";
import styled from 'styled-components'
import Input from '../components/Input'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`

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
  transition: all .1s linear;
  &:hover{
    background-color: #1e1e1e;
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin: 0;
`

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0,0,0,.5);
  background-color: white;
  max-width: 350px;
  padding: 50px;
  border-radius: 5px;
`

const Label = styled.label`
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: #676767;
  `

const LabelSingUp = styled.label`
  font-size: 16px;
  color: #676767;
` 

const LabelError = styled.label`
  font-size: 14px;
  color: red;
`

const Strong = styled.strong`
  cursor: pointer;
  a{
    text-decoration: none;
    color: #676767;
  }
`

export default function SignIn(){
  const {signin} = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if(!email | !senha){
      setError("Preencha todos os campos")
      return;
    }

    const res = signin(email, senha)

    if(res){
      setError(res)
      return;
    }
    
    navigate("/home")
  }
  
  const inverterElementos = e => {
    document.getElementById('circle').style.display = 'flex'
    document.getElementById('login-button').style.display = 'none'
  }
  
  const handleClick = () => {
    setTimeout(handleLogin, rndInt)
    inverterElementos()
    if(error.length > 0){
      document.getElementById('circle').style.display = 'none'
      document.getElementById('login-button').style.display = 'block'
    }
  }

  const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const rndInt = generateNumber(1000, 2000)

  return(
    <Container>
      <Content>
        <Title className="title">Fire Company.</Title>
        <Label>login</Label>
        <TextField 
        fullWidth 
        color="grey"
        label="E-mail" 
        variant="standard"
        value={email}
        onChange={e => [setEmail(e.target.value), setError("")]}>
        </TextField>
        <TextField
        fullWidth
        color="grey"
        label="Password" 
        variant="standard" 
        type="password"
        value={senha}
        onChange={e => [setSenha(e.target.value), setError("")]}>
        </TextField>
        <LabelError>{error}</LabelError>
        <Button onClick={handleClick} style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress color="inherit" id="circle" size={18} style={{display: 'none'}}/>
          <p style={{display: 'block', margin: 0 + 'px'}} id="login-button">Login</p>
        </Button>
        <LabelSingUp>
          Don't have an account?
          <Strong>
            <Link to="/signup">&nbsp;Register!</Link>
          </Strong>
        </LabelSingUp>
      </Content>
    </Container>
  )
}