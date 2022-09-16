import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegistroDeCategoriaForm from './RegistroDeCategoriaForm';
import TabelaCategoria from '../../layout/TabelaCategoria';

const RegistroDeCategoria = (args) => {
  
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [categorias, setCategorias] = useState([])
    const [novaCategoria, setNovaCategoria] = useState({})
    const [categoriaProdutos, setCategoriaProdutos] = useState()

    function handleSubmit(categoria){
        existeCategoriaEValidarCampos(categoria, gravarCategoria)
    }

    function existeCategoriaEValidarCampos(categoria, handleSubmit){
        if(validarCategoria){
            existeCategoriaESubmit(categoria, handleSubmit)
        }else{
            alert("Preencha todos campos!")
        }
    }

    function validarCategoria(categoria){
        if(categoria){
            if(categoria.descricao && categoria.categoriaProdutos){
                return true
            }
            return false
        }
        return false
    }

    function handleDelete(categoria){
        fetch(`http://localhost:8080/categoria/${categoria.descricao}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        }).then(()=>{
            setCategorias(categorias.filter((categoria1) => categoria.descricao!==categoria1.descricao))
            console.log("Categoria eliminada com sucesso "+ categorias)
        })
    }

    function handleOnDelete(categoria){
        if(window.confirm("Tem certeza?")){
            handleDelete(categoria)
        }
    }

    function existeCategoriaESubmit(categoria, handleSubmit){
        fetch(`http://localhost:8080/categoria/${categoria.descricao}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((cat)=>{
            cat ? 
                alert("Este item ja foi registrado")
            :handleSubmit(categoria)
        }).catch(()=>{
            handleSubmit(categoria)
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/categoria",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((cats) => setCategorias(cats))
    },[])

    useEffect(()=>{
        fetch("http://localhost:8080/categoriaprodutos",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        .then((resp) => resp.json())
        .then((cats) =>{
            setCategoriaProdutos(cats)
        })
    },[])

    function gravarCategoria(categoria){
        console.log(categoria)
        fetch("http://localhost:8080/categoria",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(categoria)
        })
        .then((resp) => resp.json())
        .then((categoria)=>{
            setNovaCategoria(categoria)
            categorias.push(categoria)
            console.log("Categoria salva com sucesso!")
        })
    }

    const [categoriaEditada, setCategoriaEditada] = useState()
    const handleOnEditFormSubmit = (e, categoriaEditada, catPesquisa)=>{
        e.preventDefault()
        setCategoriaEditada(categoriaEditada)
        categoriaEditada.catPesquisa = catPesquisa
        existeCategoriaEValidarCampos(categoriaEditada, handleOnEdit)
    }

    function handleOnEdit(categoria){
        const catPesquisa = categoria.catPesquisa
        delete categoria.catPesquisa
        console.log(categoria)
        fetch(`http://localhost:8080/categoria/${catPesquisa}`,{
            method:"PATCH",
            headers:{
                "COntent-type":"application/json"
            },
            body:JSON.stringify(categoria)
        })
        .then((resp) => resp.json())
        .then(()=>{
            console.log("Categoria actualizada com sucesso")
            
            const categorias1 = [...categorias]
            const i = categorias.findIndex((categoria1)=>categoria1.id===categoria.id)
            categorias1[i] = categoria
            setCategorias(categorias1)
        }).catch((err) =>console.log("Categoria nao existente"))
    }

  return (
    /*Resolver essa gambiara de posicionamento */
    <div className='mt-5 ms-1'>
      <Button color="dark" onClick={toggle}>+</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <h3 className='d-flex justify-content-center mt-3'>Registro de Categorias</h3>
        <hr/>
        <ModalBody>
            <RegistroDeCategoriaForm
                handleSubmit={handleSubmit}
                categoriaProdutos1={categoriaProdutos} 
            />
            <TabelaCategoria
                categorias={categorias}
                handleDelete={handleOnDelete}
                handleOnEditFormSubmit={handleOnEditFormSubmit}
            />
       </ModalBody> 
      </Modal>
    </div>
  );
}

export default RegistroDeCategoria