import { useEffect, useState } from "react"
import Input from "../../form/Input"
import Select from "../../form/Select"
import ButtonSubmit from "../../form/ButtonSubmit"
const RegistroDeCategoriaForm = ({handleSubmit, categoriaProdutos1}) =>{

    const [categoria, setCategoria] = useState()
    const [categoriaProdutos, setCategoriaProdutos] = useState(categoriaProdutos1)

    useEffect(()=>{
        setCategoriaProdutos(categoriaProdutos1.filter((categoriaProduto) => categoriaProduto.descricao==="Bebida"))
    },[])

    const handleOnChange = (e) =>{
        if(e.target.name!=="categoriaProdutos"){
            setCategoria({...categoria, [e.target.name]:e.target.value})
        }
    }

    const submit = (e) => {
        e.preventDefault()
        
        categoria.categoriaProdutos = {
            id : 2,
            descricao : "Bebida" 
        }
        handleSubmit(categoria)
    }

    return(
        <form onSubmit={submit}>
            <Select
                text="Categoria do Produto"
                name="categoriaProdutos"
                categorias = {categoriaProdutos}
                handleOnChange={handleOnChange}
                style="w-50"
            />
            <Input
                text="Descricao"
                type="text"
                placeholder="Nome da refeicao ou marca da bebida"
                name="descricao"
                handleOnChange={handleOnChange}
            />
            <ButtonSubmit style="btn-outline-primary mt-3 border" text="Gravar"/>
        </form>
    )
}

export default RegistroDeCategoriaForm