import styles from "./Refeicoes.module.css"
import {AiOutlineStock} from "react-icons/ai"
import Select from "../../form/Select"
import Button from "../../form/Button"
import TabelaEstoque from "../../layout/TabelaEstoque"
function Estoque(){
    var array = ["Todas","Refeicao","Bebida"]
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex my-3">
                <div style={{width:"30%"}} >
                    <Select
                        text="Categoria"
                        name="categoria"
                        options={array}
                    /> 
                    <div className="my-3 p-0">
                        <label for="" className="form-label">Descricao</label>
                        <input type="text" className="form-control" placeholder="Descricao da bebida (Marca ou Nome)" />
                    </div>
                    <Button
                        style="btn-secondary"
                        text="Imprimir"
                    />
                </div>
                <div>
                    <h1>Colocar uma foto para nao deixar este espaco em branco</h1>
                </div>
            </form>
            <TabelaEstoque />
        </div>
    )
}

export default Estoque