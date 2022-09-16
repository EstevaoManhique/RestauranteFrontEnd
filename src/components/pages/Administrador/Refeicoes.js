import styles from "./Refeicoes.module.css"
import {GiMeal} from "react-icons/gi"
import NavBar from "../../layout/NavBar"
import RefeicoesForm from "./RefeicoesForm"
import {useState, useEffect} from "react"
import TabelaRefeicao from "../../layout/TabelaRefeicao"

function Refeicoes(){

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
             && refeicao.preco && refeicao.foto){
                return true
        }
        return false
    }

    function existeRefeicao(refeicao, handleOnSubmit){

        fetch(`http://localhost:8080/refeicao/${refeicao.descricao}/pesquisa`,{
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
            //Executa este comando se nao encontrar o item procurado
            handleOnSubmit(refeicao)
        })
    }

    function gravarRefeicao(refeicao){

        const formData = new FormData()
        formData.append("file", refeicao.foto)
        delete refeicao.foto
        formData.append("refeicaoDtoStr", JSON.stringify(refeicao))
        
        fetch("http://localhost:8080/refeicao",{
            method:"POST",
            body:formData
        })
        .then((resp) => resp.json())
        .then((refeicao)=>{
            setNovaRefeicao(refeicao)
            refeicoes1.push(refeicao)
            alert("Refeicao registrada com scesso!")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/refeicao",{
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

        fetch(`http://localhost:8080/refeicao/${refPesquisa}`,{
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
        fetch(`http://localhost:8080/refeicao/${descricao}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        }).then(()=>{
            setRefeicoes1(refeicoes1.filter((refeicao) => refeicao.descricao!==descricao))
            console.log(refeicoes1)
            console.log("refeicao removida "+descricao)
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
        <div className="    container d-flex flex-column my-0">
            <div className="d-flex mt-3">
                <RefeicoesForm
                    handleSaveSubmit={handleSaveSubmit}
                    width="30%"
                    foto={foto}
                    categorias={categorias}
                />
                {/*Qui tal componentizar este elemento!*/}
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                    { preview ? (<img src={preview} alt="Escolha uma imagem!" className={styles.img}/>):
                    (<GiMeal className={styles.svg_refeicoes}/>)}
                </div>
            </div>
            <TabelaRefeicao
                refeicoes={refeicoes1}
                handleEditFormSubmit={handleEditFormSubmit}
                handleDeleteClick={handleDeleteClick}
                categorias={categorias}
            />
        </div>
    </>
    )
}

export default Refeicoes