import Button from "../form/Button"
import {useState} from "react"
import ReadOnly from "./ReadOnly"
import EditRow from "./EditRow"

function TabelaRefeicao({refeicoes, handleEditFormSubmit, handleDeleteClick, categorias}){

    const [editRefeicaoDescricao, setEditRefeicaoDescricao] = useState(null)
    const [editRefeicao, setEditRefeicao] = useState()
    const [refPesquisa, setRefPesquisa] = useState()

    const handleEditClick = (e, refeicao) => {
        e.preventDefault()
        setEditRefeicaoDescricao(refeicao.descricao)
        console.log(editRefeicao)
        setEditRefeicao(refeicao)

        setRefPesquisa(refeicao.descricao)
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
        handleDeleteClick(refeicao.descricao)
    }

    return(
        <form onSubmit={handleEditOnSubmit} className="container border p-0 m-0">
            <table className="table table-bordered m-0">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descricao</th>
                        <th>Preco</th>
                        <th>Foto</th>
                        <th style={{width:"12rem"}}>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                    {refeicoes.map((refeicao)=>(
                        <>
                            {editRefeicaoDescricao === refeicao.descricao ?( 
                                <EditRow
                                    editRefeicao={editRefeicao}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancel={handleCancelClick}
                                    categorias={categorias}
                                />
                            ) : (
                                <ReadOnly
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