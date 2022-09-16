import styles from "./Funcionario.module.css"
import { BsFillPeopleFill } from "react-icons/bs"
import Input from "../../form/Input"
import Button from "../../form/ButtonSubmit"
import NavBar from "../../layout/NavBar"
import TabelaFuncionario from "../../layout/TabelaFuncionario"

///////Refeicoes///////
import {GiMeal} from "react-icons/gi"
import FuncionarioForm from "./FuncionarioForm"
import {useState, useEffect} from "react"

function Funcionario(){

    const [refeicoes1, setRefeicoes1] = useState([])
    /*Desvendar este misterio:Sem fazer um set da nova refeicao, nao e possivel fazer o push.
    Nao sei porque. Isso esta na na funcao de gravar refeicao*/
    const [novaRefeicao, setNovaRefeicao] = useState({})
    const [refeicaoEditada, setRefeicaoEditada] = useState()    
    const [categorias, setCategorias] = useState([])
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()

    function handleSaveSubmit(refeicao){
        existeRefeicaoEValidarCampos(refeicao, gravarRefeicao)
    }

    function handleOnEdit(refeicao){
        existeRefeicaoEValidarCampos(refeicao, handleEdit)
    }

    function existeRefeicaoEValidarCampos(refeicao, handleEditOrSave){
        if(validarCampos(refeicao)){
            existeRefeicao(refeicao, handleEditOrSave)
        } else{
            alert("Preencha todos campos!")
        }
    }

    const validarCampos = (refeicao) =>{
        if(refeicao.email && refeicao.nome
             && refeicao.outrosNomes){
                return true
        }
        return false
    }

    function existeRefeicao(refeicao, handleOnSubmit){

        fetch(`http://localhost:8080/balconista/${refeicao.email}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((refeicao)=>{
            refeicao ? 
                alert("Este item ja foi registrado")
            :handleOnSubmit(refeicao)
        
        //Resolver esta gambiara
        }).catch((err) =>{
            handleOnSubmit(refeicao)
        })
    }

    function gravarRefeicao(refeicao){

        delete refeicao.contacto
        //Senha padrao: Usada ao redistrar usuario.
        refeicao.senha = "n83k#$"
        fetch("http://localhost:8080/balconista",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(refeicao)
        })
        .then((resp) => resp.json())
        .then((refeicao)=>{
            setNovaRefeicao(refeicao)
            refeicoes1.push(refeicao)
            alert("Refeicao registrada com scesso!")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/balconista",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((refeicoes)=>{
            setRefeicoes1(refeicoes)
        })
        .catch((err)=> console.log("Nao foi possivel retornar as refeicoes, erro"+err)) 
    },[])

    const handleEditFormSubmit = (e, refeicaoEditada, refPesquisa) =>{
        e.preventDefault()
        refeicaoEditada.refPesquisa = refPesquisa
        setRefeicaoEditada(refeicaoEditada)
        handleOnEdit(refeicaoEditada)
    }

    const handleEdit = (refeicaoEditada) =>{
        refeicaoEditada.foto = null
        const refPesquisa = refeicaoEditada.refPesquisa
        delete refeicaoEditada.refPesquisa

        fetch(`http://localhost:8080/balconista/${refPesquisa}`,{
            method:"PATCH",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(refeicaoEditada)
        })
        .then((resp) =>{
            if(resp.ok){
                resp.json()
            }
        })
        .then(()=>{
            //Logica ara actualizar a refeicao editada no front
            const refeicoes = [... refeicoes1]
            //Pegando o indice da refeicao editada
            const i = refeicoes1.findIndex((refeicao)=> refeicao.descricao === refPesquisa)
            //Colocando os dados actualizados da refeicao editada
            refeicoes[i] = refeicaoEditada
            //setar as refeicoes no state
            setRefeicoes1(refeicoes)
        })
        .catch((err) => console.log(err.message))
    }
    
    const handleDeleteClick = (id) => {
        if(window.confirm("Tem certeza?")){
            setRefeicoes1(refeicoes1.filter((refeicao1)=> refeicao1.id!==id))
            handleDelete(id)
        }
    }

    const handleDelete = (email) =>{
        fetch(`http://localhost:8080/balconista/${email}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        }).then(()=>{
            setRefeicoes1(refeicoes1.filter((refeicao) => refeicao.email!==email))
            console.log(refeicoes1)
            console.log("refeicao removida "+email)
        })
    }

    return(
        <>
            <NavBar/>
            <div className="container d-flex flex-column my-0">
                <div className="d-flex mt-3">
                    <FuncionarioForm
                        handleSaveSubmit={handleSaveSubmit}
                        width="30%"
                    />
                    {/*Qui tal componentizar este elemento!*/}
                    <div className="d-flex justify-content-center" style={{width: "70%"}}>
                        { preview ? (<img src={preview} alt="Escolha uma imagem!" className={styles.img}/>):
                        (<BsFillPeopleFill className={styles.svg_funcionario}/>)}
                    </div>
                </div>
                <TabelaFuncionario
                    refeicoes={refeicoes1}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleDeleteClick={handleDeleteClick}
                />
            </div>
        </>
    )
}

export default Funcionario