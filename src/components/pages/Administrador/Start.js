import Login from "./Login"
import RegistroDoUsuario from "./RegistroDoUsuario"
import {useState} from "react"

function Start(){

    const [existe, setExiste] = useState(true)

    function existeAdmin(){
        fetch("http://localhost:8080/gestor",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((users) =>{
            const existe = !users ? true : false
            setExiste(existe)
            console.log(existe)
        })
        .catch((err) => console.log(err))
    }
    window.DOMRectReadOnly = existeAdmin
    return(
        <>{!existe ? <RegistroDoUsuario/>:<Login/>}</>
    )
}

export default Start