import styles  from "./Login.module.css"
import bg from "./—Pngtree—black hand-painted kitchen menu psd_997935.jpg"
import Input from "../../form/Input"
import Button from "../../form/ButtonSubmit"
import Span from "../../form/Span"
import {Link} from 'react-router-dom'

import RegistroDoUsuarioForm from "./RegistroDoUsuarioForm"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

function RegistroDoUsuario(){

    const navigate = useNavigate()
    const [existe, setExiste] = useState(false)
    const [senhasDiferentes, setSenhasDiferentes] = useState(false)

    function registrarUsuario(user){
        validarCampos(user)
    }

    function validarCampos(user){
        if(user.email && user.nome && user.outrosNomes
         && user.senha && user.repetirSenha){
            if(user.senha===user.repetirSenha){
                existeUsuario(user)
            }else{
                setSenhasDiferentes(true)
                console.log(senhasDiferentes)
            }
        }else{
            //Preencha todos campos!
        }
    }

    function existeUsuario(user){
        var exists = false
        //useEffect(())
        const options = {
            method:"GET",
            headers:{
                "Content-type":"application.json"
            }
        }
        
        let response = fetch(`http://localhost:8080/gestor/${user.email}`,options)
        .then((resp)=> resp.json())
        .then((user)=> {
            if(user){
                setExiste(true)
                exists = true
                console.log("Ja existe usuario")
                  
            }else{
                console.log("Este e o primeiro usuario")
                gravarUsuario(user)
            }
            if(!exists){
                console.log(existe)
                console.log("Para novo usuario")
                gravarUsuario(user)
                setExiste(false)
            }
        })
    }

    function gravarUsuario(user){
        const repetirSenha = user.repetirSenha
        delete user.repetirSenha
        console.log(user)
      fetch("http://localhost:8080/gestor",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(user)
      }).then((resp) => resp.json())
        .then((data) =>{
            user.repetirSenha = repetirSenha
            console.log("Usuario gravado com sucesso!")
        })
    }

    return(
      <div class="container p-0 rounded border my-5 card d-flex flex-column border-0" style={{width: "30rem"}}>
          <div class="w-100">
            <img class="w-100 rounded" src={bg} alt=""/>
          </div>
          <div class="card bg-transparent border card-img-overlay">
            <div class="d-flex mt-5 justify-content-center">
              <h2 class="text-white">Registro do usuario</h2>
            </div>
            <RegistroDoUsuarioForm handleOnSubmit={registrarUsuario}/>
            {existe && (
                <div className="mt-2 alert text-danger d-flex justify-content-center">
                    <p>Este usuario ja possui uma conta!</p>
                </div>
            )}
            {senhasDiferentes && (
                <div className="mt-2 alert text-danger d-flex justify-content-center">
                    <p>Este usuario ja possui uma conta!</p>
                </div>
            )}
          </div>
      </div>
      )
}

export default RegistroDoUsuario