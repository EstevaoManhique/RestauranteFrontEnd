import { useState } from "react"
import EditCat from "./EditCat"
import ReadOnlyCat from "./ReadOnlyCat"

const TabelaCategoria = ({categorias, handleDelete, handleOnEditFormSubmit}) =>{

    const [editCategoria, setEditCategoria] = useState(null)
    const [editCatId, setEditCatId] = useState(null)
    const [catPesquisa, setCatPesquisa] = useState()

    const edit = (e)=>{
        e.preventDefault()
        handleOnEditFormSubmit(e, editCategoria, catPesquisa)
        setEditCategoria(null)
        setEditCatId(null)
        setCatPesquisa(null)
    }

    const handleOnDelete = (e, categoria) =>{
        e.preventDefault()
        handleDelete(categoria)
    }

    const handleEditClick = (e, categoria) =>{
        e.preventDefault()
        setCatPesquisa(categoria.descricao)
        setEditCatId(categoria.id)
        setEditCategoria(categoria)
        console.log(categoria)
    }
    
    const handleEditFormChange = (e) =>{
        e.preventDefault()
        setEditCategoria({... editCategoria,[e.target.name]: e.target.value})
        console.log(editCategoria)
    }

    const handleCancel = (e) =>{
        e.preventDefault()
        setEditCatId(null)
        setCatPesquisa(null)
    }

    return(
        <>
            <form onSubmit={edit} className="mt-4">
                <table className="table table-bordered p-0 m-0">
                    <thead>
                        <th>Categoria</th>
                        <th>Opcoes</th>
                    </thead>
                    <tbody>
                        {
                            categorias.map((categoria) =>(
                            <>
                                {(editCatId===categoria.id) ? (
                                    <EditCat
                                        editCategoria={editCategoria}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancel={handleCancel}
                                    />
                                ):(
                                    <ReadOnlyCat
                                        categoria={categoria}
                                        handleEditClick={handleEditClick}
                                        handleOnDelete={handleOnDelete}
                                    />
                                )}
                            </>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default TabelaCategoria