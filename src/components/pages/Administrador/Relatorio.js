import styles from "./Refeicoes.module.css"
import {TbReport} from "react-icons/tb"
import Select from "../../form/Select"
import NavBar from "../../layout/NavBar"

function Bebida(){
    const array = ["Todas","Refeicao", "Bebida"]
    return(
        <>
        <NavBar/>
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
                            <input type="text" className="form-control" placeholder="Descricao da Bebida (Nome ou Marca)" />
                        </div>
                        <button className="btn btn-secondary" style={{width:"6rem"}} type="button">Imprimir</button>
                    </div>
                    <div style={{width:"70%"}} >
                        <h1>Colocar uma foto estendida horizontalmente para nao deixar este espaco em branco</h1>
                    </div>
                </form>

                <div className="container border p-0 mt-0">
                    <table className="table table-bordered m-0">
                        <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Descricao</th>
                            <th>Quantidade-Venda</th>
                            <th>Preco-Unidade</th>
                            <th>Valor-Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Refrigerante</td>
                                <td>Fanta laranja</td>
                                <td>200</td>
                                <td>150</td>
                                <td>30000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Bebida