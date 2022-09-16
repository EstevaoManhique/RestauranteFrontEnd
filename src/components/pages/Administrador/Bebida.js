import styles from "./Refeicoes.module.css"
import {BiBeer, BiDrink} from "react-icons/bi"
import NavBar from "../../layout/NavBar"
import BebidasForm from "./BebidasForm"
import {useState, useEffect} from "react"
import TabelaBebida from "../../layout/TabelaBebida"

function Bebida(){
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
        if(refeicao.categoria && refeicao.descricao
             && refeicao.preco && refeicao.foto && refeicao.estoque
             && refeicao.limite_minimo && refeicao.validade){
                return true
        }
        return false
    }

    function existeRefeicao(refeicao, handleOnSubmit){
        fetch(`http://localhost:8080/bebida/${refeicao.descricao}/pesquisa`,{
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

        console.log(refeicao)
        const formData = new FormData()
        formData.append("file", refeicao.foto)
        delete refeicao.foto
        formData.append("bebidaDtoStr", JSON.stringify(refeicao))
        
        fetch("http://localhost:8080/bebida",{
            method:"POST",
            body:formData
        })
        .then((resp) => resp.json())
        .then((refeicao)=>{
            console.log(refeicao.validade)
            setNovaRefeicao(refeicao)
            refeicoes1.push(refeicao)
            console.log(refeicao)
            alert("Bebida registrada com scesso!")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/bebida",{
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

        fetch(`http://localhost:8080/bebida/${refPesquisa}`,{
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

    const handleDelete = (descricao) =>{
        fetch(`http://localhost:8080/bebida/${descricao}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        }).then(()=>{
            setRefeicoes1(refeicoes1.filter((refeicao) => refeicao.descricao!==descricao))
            console.log(refeicoes1)
            console.log("bebida removida "+descricao)
        })
    }

    //Retorna todas categorias das refeicoes
    useEffect(() =>{
        fetch("http://localhost:8080/categoria",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            
            setCategorias(data)
        })
    },[])

    const foto = (imgRefeicao) =>{
        setImage(imgRefeicao)
    }

    useEffect(() =>{
        if(image){
            const reader = new FileReader()
            reader.onloadend = () =>{
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        }
    }, [image])

    return(
    <>
        <NavBar/>
        <div className="container d-flex flex-column my-0">
            <div className="d-flex mt-3">
                <BebidasForm
                    handleSaveSubmit={handleSaveSubmit}
                    width="30%"
                    foto={foto}
                    categorias={categorias}
                />
                {/*Qui tal componentizar este elemento!*/}
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                    { preview ? (<img src={preview} alt="Escolha uma imagem!" className={styles.img}/>):
                    (<BiBeer className={styles.svg_bebida}/>)}
                </div>
            </div>
            <TabelaBebida
                refeicoes={refeicoes1}
                handleEditFormSubmit={handleEditFormSubmit}
                handleDeleteClick={handleDeleteClick}
                categorias={categorias}
            />
        </div>
    </>
    )
}

export default Bebida