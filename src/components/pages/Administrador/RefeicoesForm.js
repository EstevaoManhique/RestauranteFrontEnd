import Select from "../../form/Select"
import Input from "../../form/Input"
import {useState} from "react"
import ButtonSubmit from "../../form/ButtonSubmit"
import RegistroDeCategoria from "./RegistroDeCategoria"

function RefeicoesForm({handleSaveSubmit, width, foto, categorias}){
    const [refeicao, setRefeicao] = useState({})
    
    function handleSaveOnSubmit(e){
        e.preventDefault()
        handleSaveSubmit(refeicao)
    }

    function handleChange(e){
        if(e.target.name==="categoria"){
            const categoria = categorias.filter((categoria) => categoria.descricao===e.target.value)
            setRefeicao({...refeicao, "categoria" : {"id":categoria[0].id, "descricao":categoria[0].descricao}})
        }else{
            setRefeicao({...refeicao, [e.target.name]:e.target.value})
            console.log(refeicao)
        }
        var file = null
        if(e.target.name==="foto"){
            file = e.target.files[0]
        }
        if(file && file.type.substring(0,5) === "image"){
            foto(file)
            setRefeicao({...refeicao, [e.target.name]:file})
        }
    }

    return(
        <>
            <form onSubmit={handleSaveOnSubmit} className="my-0 py-0" 
                style={{width:{width}}} encType="multipart/form-data">            
                
                <Select
                    text="Categoria"
                    name="categoria"
                    categorias={categorias}
                    handleOnChange={handleChange}
                    style="w-50"
                />
                <Input
                    text="Descricao"
                    type="text"
                    name="descricao"
                    placeholder="Descreva a refeicao"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Preco"
                    type="number"
                    name="preco"
                    placeholder="Defina o preco"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Foto"
                    type="file"
                    name="foto"
                    handleOnChange={handleChange}
                    isPhoto = {true}
                    accept="image/*"
                />
                <ButtonSubmit
                    style ="btn-primary my-3"
                    text="Salvar"
                
                />
        </form>
        <RegistroDeCategoria/>
    </>
    )
}

export default RefeicoesForm