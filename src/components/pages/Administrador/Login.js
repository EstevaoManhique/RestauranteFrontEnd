import bg from "./—Pngtree—black hand-painted kitchen menu psd_997935.jpg"
import LoginForm from "./LoginForm"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login(){

    const [entradasValidas, setEntradasValidas] = useState(true)
    const navigate = useNavigate()
    const [usuarioInValido, setUsuarioInValido] = useState(false)

    function validarEntradas(user){
        if(user.email && user.senha){
            getUser(user)
            setEntradasValidas(true)
        }else{
            setEntradasValidas(false)
        }
    }

    function getUser(user){

        fetch(`http://localhost:8080/gestor/${user.email}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            },
            mode:"cors"
        })
        .then((resp) => resp.json())
        .then((user)=>{
            if(user){
                console.log("usuario valido")
                navigate('/inicio')
            }
        }).catch(()=>{
            console.log("Recurso nao encontrado!")
            setUsuarioInValido(true)
        })
    }

    function handleSubmit(user){
        validarEntradas(user)
    }

    return(
        <div class="container p-0 rounded border my-5 card d-flex flex-column border-0" style={{width: "30rem"}}>
            <div class="w-100">
                <img class="w-100 rounded" src={bg} alt=""/>
            </div>
            <div class="card bg-transparent border card-img-overlay">
                <div class="d-flex my-5 justify-content-center">
                    <h1 class="text-white">Login</h1>
                </div>
            <LoginForm handleOnSubmit={handleSubmit} />
                {!entradasValidas && (
                    <div className="mt-2 alert text-danger d-flex justify-content-center">
                        <p>Preencha todos campos!</p>
                    </div>
                )
                }
                {usuarioInValido && (
                    <div className="mt-2 alert text-danger d-flex justify-content-center">
                        <p>Usuario ou senha invalidos!</p>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Login