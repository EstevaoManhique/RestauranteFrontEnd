import ButtonSubmit from "../form/ButtonSubmit"
import InputTable from "../form/InputTable"
import Select from "../form/Select"

function EditRow({handleEditFormChange, editRefeicao, handleCancel}){

    return(
        
            <tr>
                <td>
                    <InputTable
                        type="text"
                        name="email"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.email}
                    />
                </td>
                <td>
                    <InputTable
                        type="text"
                        name="Nome"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.nome}
                    />
                </td>
                <td>
                    <InputTable
                        type="text"
                        name="outrosNomes"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.outrosNomes}
                    />
                </td>
                <td>
                    <InputTable
                        type="text"
                        name="Contacto"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.outrosNomes}
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

export default EditRow