import React from "react";
import headerImage from '../images/header.png'
import styled from 'styled-components'
import axios from 'axios'
import Signup from "./Signup";
import { Link } from "react-router-dom";

export default function Home() {

    const URL = 'http://localhost:4000'

    const [loginUser, setLoginUser] = React.useState({
        email:"",
        password:""
    })
    function sendLogin(event){
        event.preventDefault()

        const promise = axios.post(`${URL}/signin`,loginUser)

        promise.then((response)=>
            console.log(response.data)
        
        )

        promise.catch((response)=>{
            console.log(response)
        })
    }



  return (
    <GeneralStyled>
        <img src={headerImage}/>
        <h1>Login</h1>

        <button className="gitHubButton">Entrar com o github</button>

        <form onSubmit={sendLogin}>

            <input type='text' 
            placeholder="email" 
            id="email" 
            value={loginUser.email} 
            onChange={(event)=>setLoginUser({...loginUser,email:event.target.value})}/>

            <input type='text' 
            placeholder="senha" 
            id="password" 
            value={loginUser.password} 
            onChange={(event)=>setLoginUser({...loginUser,password:event.target.value})}/>

            <button className="enterButton">entrar</button>
            
        </form>
        <Link to='/signup'>
            <h3>Não tem cadastro? clique aqui</h3>
        </Link>
    </GeneralStyled>
  )
}


const GeneralStyled = styled.div`
*box-sizing:border-box;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 100vw;
height: 100vh;

form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }

  input{
    width:80vw;
    padding:10px;
    margin:5px auto
}

button{
    width:82vw;
    padding:10px;
    margin:5px auto
    background-color:purple;
    cursor:pointer;
}

.gitHubButton{
    background-color:black;
    color:#fff;
}

.enterButton{
    background-color:blue;
}

h3{
    cursor:pointer;
}
`



