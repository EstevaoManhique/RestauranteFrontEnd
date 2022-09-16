import Button from "../form/Button"
function ReadOnlyCat({categoria, handleEditClick, handleOnDelete}){
    return(
        <>
            <tr>
                <td className="w-100">{categoria.descricao}</td>
                <td className="d-flex flex-row justify-content-between">
                    <Button
                        style="btn-outline-secondary my-0"
                        text="Editar"
                        object={categoria}
                        handleOnClick={handleEditClick}
                    />
                    <Button
                        style="btn-outline-danger my-0 m-2"
                        text="Eliminar"
                        object={categoria}
                        handleOnClick={handleOnDelete}
                    />
                </td>
            </tr>

        </>
    )
}

export default ReadOnlyCat