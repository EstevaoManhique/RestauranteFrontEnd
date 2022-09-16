import Button from "../form/Button"
import {useState} from "react"
import ReadOnlyFuncionario from "./ReadOnlyFuncionario"
import EditRowFuncionario from "./EditRowFuncionario"

function TabelaRefeicao({refeicoes, handleEditFormSubmit, handleDeleteClick, categorias}){

    const [editRefeicaoDescricao, setEditRefeicaoDescricao] = useState(null)
    const [editRefeicao, setEditRefeicao] = useState()
    const [refPesquisa, setRefPesquisa] = useState()

    const handleEditClick = (e, usuario) => {
        e.preventDefault()
        setEditRefeicaoDescricao(usuario.email)
        console.log(editRefeicao)
        setEditRefeicao(usuario)

        setRefPesquisa(usuario.email)
    }
    
    const handleEditFormChange = (e) => {
        if(e.target.name==="categoria"){    
            let categoria = categorias.filter((categoria)=> categoria.descricao===e.target.value)
            setEditRefeicao({... editRefeicao, "categoria":{"id":categoria[0].id,
            "descricao":categoria[0].descricao, "refeicoes":null, "bebidas": null}})
            console.log(editRefeicao)
        }else{
            setEditRefeicao({...editRefeicao, [e.target.name]:e.target.value})
        }
    }

    const handleEditOnSubmit = (e) => {
        e.preventDefault()
        handleEditFormSubmit(e, editRefeicao, refPesquisa)
        setEditRefeicaoDescricao(null)
        setEditRefeicao(null)

        setRefPesquisa(null)
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        setEditRefeicaoDescricao(null)
    }

    const handleOnDelete = (e, refeicao) => {
        e.preventDefault()
        handleDeleteClick(refeicao.email)
    }

    return(
        <form onSubmit={handleEditOnSubmit} className="container border p-0 m-0">
            <table className="table table-bordered m-0">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Outros Nomes</th>
                        <th>Contacto</th>
                        <th style={{width:"12rem"}}>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                    {refeicoes.map((refeicao)=>(
                        <>
                            {editRefeicaoDescricao === refeicao.email ?( 
                                <EditRowFuncionario
                                    editRefeicao={editRefeicao}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancel={handleCancelClick}
                                    categorias={categorias}
                                />
                            ) : (
                                <ReadOnlyFuncionario
                                    refeicao={refeicao}
                                    handleEditClick={handleEditClick}
                                    handleOnDelete={handleOnDelete}
                                />
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </form>
    )
}

export default TabelaRefeicao