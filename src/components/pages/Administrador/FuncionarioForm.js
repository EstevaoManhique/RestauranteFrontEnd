import Select from "../../form/Select"
import Input from "../../form/Input"
import {useState} from "react"
import ButtonSubmit from "../../form/ButtonSubmit"
import RegistroDeCategoria from "./RegistroDeCategoria"

function RefeicoesForm({handleSaveSubmit, width, foto, categorias}){
    const [refeicao, setRefeicao] = useState({})
    
    function handleSaveOnSubmit(e){
        e.preventDefault()
        refeicao.estado = "Offline"
        handleSaveSubmit(refeicao)
    }

    function handleChange(e){
        if(e.target.name==="categoria"){
            const categoria = categorias.filter((categoria) => categoria.descricao===e.target.value)
            setRefeicao({...refeicao, "categoria" : {"id":categoria[0].id, "descricao":categoria[0].descricao, "refeicoes":null, "bebidas":null}})
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
                <Input
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Insira o email do funcionario"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Nome"
                    type="text"
                    name="nome"
                    placeholder="Insira o nome do balconista"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Outros Nomes"
                    type="text"
                    name="outrosNomes"
                    placeholder="Outros Nomes"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Contacto"
                    type="number"
                    name="contacto"
                    placeholder="Contacto o balconista"
                    handleOnChange={handleChange}
                />
                <ButtonSubmit
                    style ="btn-primary my-3"
                    text="Salvar"
                
                />
        </form>
    </>
    )
}

export default RefeicoesForm