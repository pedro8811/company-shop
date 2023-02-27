import React, {useState} from "react";
import styled from 'styled-components'
import Input from '../components/Input'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CircularProgress from '@mui/material/CircularProgress';

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
  text-transform: uppercase;
  border-bottom: 1px solid black;
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
  margin-bottom: 10px;
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
  
  const spinner = <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

  return(
    <Container>
      <Content>
        <Title className="title">Fire Company.</Title>
        <Label>login</Label>
        <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={e => [setEmail(e.target.value), setError("")]}/>
        <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={e => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button onClick={() => setTimeout(handleLogin, 2000)}>
          <CircularProgress color="inherit"/>
        </Button>
        <LabelSingUp>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSingUp>
      </Content>
    </Container>
  )
}