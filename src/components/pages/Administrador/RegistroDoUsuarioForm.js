import Input from '../../form/Input'
import ButtonSubmit from '../../form/ButtonSubmit'
import {useState} from "react"

function RegistroDoUsuarioForm({handleOnSubmit}){

    const [user, setUser] = useState({})

    const submit = (e) =>{
        e.preventDefault()
        handleOnSubmit(user)
    }

    function handleChange(e){
        setUser({...user, 'estado':'activo', [e.target.name]:e.target.value})
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
                text="Nome"
                type="text"
                name="nome"
                placeholder="Digite o seu nome"
                handleOnChange={handleChange}
                onChange=""
                style=" text-white"
            />
            <Input
                text="Outros Nomes"
                type="text"
                name="outrosNomes"
                placeholder="Outros Nomes"
                handleOnChange={handleChange}
                style=" text-white"
            />
            <Input
                text="Senha"
                type="password"
                name="senha"
                placeholder="Digite a sua senha"
                handleOnChange={handleChange}
                style="text-white"
            />
            <Input
                text="Repetir Senha"
                type="password"
                name="repetirSenha"
                placeholder="Repita a senha"
                handleOnChange={handleChange}
                style="text-white"
            />
            <ButtonSubmit style="btn-outline-secondary mt-3 border text-white w-100" text="Registrar"/>
        </form>
    )
}

export default RegistroDoUsuarioForm