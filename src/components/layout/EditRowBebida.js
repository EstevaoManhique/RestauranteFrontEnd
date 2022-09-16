import ButtonSubmit from "../form/ButtonSubmit"
import InputTable from "../form/InputTable"
import Select from "../form/Select"

function EditRowBebida({handleEditFormChange, editRefeicao, handleCancel, categorias}){

    return(
        
            <tr>
                <td>
                    <InputTable
                        type="text"
                        name="categoriaDescricao"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.categoria.descricao}
                    />
                </td>
                <td>
                    <InputTable
                        type="text"
                        name="descricao"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.descricao}
                    />
                </td>
                <td>
                    <InputTable
                        type="number"
                        name="preco"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.preco}
                    />
                </td>
                <td>
                    <InputTable
                        type="file"
                        name="foto"
                        handleEditFormChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <InputTable
                        type="number"
                        name="limite_minimo"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.limite_minimo}
                    />
                </td>
                <td>
                    <InputTable
                        type="date"
                        value={editRefeicao.preco}
                    />
                </td>
                <td>
                    <InputTable
                        type="date"
                        name="validade"
                        handleEditFormChange={handleEditFormChange}
                        value={editRefeicao.validade}
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

export default EditRowBebida