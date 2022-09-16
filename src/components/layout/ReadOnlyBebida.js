import Button from "../form/Button"
import { FaEye } from "react-icons/fa"

function ReadOnlyBebida({refeicao, handleEditClick, handleOnDelete}){
    return(
        <tr>
            <td>{refeicao.categoria.descricao}</td>
            <td>{refeicao.descricao}</td>
            <td>{refeicao.preco}</td>
            <td style={{width:"1px"}}><FaEye/></td>
            <td>{refeicao.limite_minimo}</td>
            <td>{"Data_Registro"}</td>
            <td>{refeicao.validade}</td>
            <td className="p-1 d-flex justify-content-around">
                <Button
                    style="btn-secondary my-0"
                    text="Editar"
                    object={refeicao}
                    handleOnClick={handleEditClick}
                />
                <Button
                    style="btn-danger my-0"
                    text="Eliminar"
                    object={refeicao}
                    handleOnClick={handleOnDelete}
                />
            </td>
        </tr>
    )
}

export default ReadOnlyBebida