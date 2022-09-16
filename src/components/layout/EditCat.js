import InputTable from "../form/InputTable"
import ButtonSubmit from "../form/ButtonSubmit"

function EditCat({editCategoria, handleEditFormChange, handleCancel}){
    return(
        <tr>
            <td>
                <InputTable
                    type="text"
                    name="descricao"
                    placeholder="Descreva a categoria"
                    handleEditFormChange={handleEditFormChange}
                    value={editCategoria.descricao}
                />
            </td>
            <td className="p-1 d-flex justify-content-around">
                <ButtonSubmit
                    style="btn-secondary my-0"
                    text="Salvar"
                />
                <ButtonSubmit
                    style="btn-danger my-0"
                    text="Cancelar"   
                    handleOnCancel={handleCancel}
                />
            </td>
        </tr>
    )
}

export default EditCat