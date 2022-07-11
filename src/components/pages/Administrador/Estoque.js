import styles from "./Refeicoes.module.css"
import {AiOutlineStock} from "react-icons/ai"

function Estoque(){
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex my-3">
                <div style={{width:"30%"}} >
                    <div className="my-3">
                        <label className="form-label">Categoria</label>
                        
                        <div className="d-flex flex-row">
                        <select className="form-select" name="f_transporte">
                            <option>Todas</option>
                            <option>Lanche</option>
                            <option>Pequeno Almoco</option>
                            <option>Sobremesa</option>
                        </select>
                        </div>
                    </div>
                    <div className="my-3 p-0">
                        <label for="" className="form-label">Descricao</label>
                        <input type="text" className="form-control" placeholder="Descricao da bebida (Marca ou Nome)" />
                    </div>
                    <button className="btn btn-secondary" style={{width:"6rem"}} type="button">Imprimir</button>
                </div>
                <div>
                    <h1>Colocar uma foto para nao deixar este espaco em branco</h1>
                </div>
            </form>


            <div className="container border p-0">
                <table className="table table-bordered m-0">
                    <thead>
                        <tr>
                            <th>Descricao</th>
                            <th>Quantidade</th>
                            <th>Preco</th>
                            <th>Limite Vermelho</th>
                            <th>Validade</th>
                            <th>Data_Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CocaCola</td>
                            <td>280</td>
                            <td>200</td>
                            <td>30</td>
                            <td>12/03/2024</td>
                            <td>20/04/2022</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Estoque