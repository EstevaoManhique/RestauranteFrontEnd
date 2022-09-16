import styles  from "./Login.module.css"

import Input from "../../form/Input"
import ButtonSubmit from "../../form/ButtonSubmit"
import Span from "../../form/Span"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function LoginForm({handleOnSubmit}){

    const [user, setUser] = useState({})
    
    const submit = (e) =>{
        e.preventDefault()
        handleOnSubmit(user)
    }

    function handleChange(e){
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    return(
        <form onSubmit={submit}>
            <Input
                text="Email"
                type="email"
                name="email"
                placeholder="Digite o seu email"
                handleOnChange={handleChange}
                style=" text-white"
            />
            <Input
                text="Senha"
                type="password"
                name="senha"
                placeholder="Digite a sua senha"
                handleOnChange={handleChange}
                style=" text-white"
            />
            <Span
                position="end"
            />
            <ButtonSubmit
                style="btn-outline-secondary mt-3 border text-white w-100"
                text="Entrar"
            />
      </form>
    )
}

export default LoginForm