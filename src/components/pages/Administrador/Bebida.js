import styles from "./Refeicoes.module.css"
import {BiBeer, BiDrink} from "react-icons/bi"
function Bebida(){
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex mt-3">
                <div style={{width:"30%"}} >
                <div className="my-3">
                    <label className="form-label">Categoria</label>
                    
                    <div className="d-flex flex-row">
                    <select className="form-select" name="f_transporte">
                        <option>Lanche</option>
                        <option>Pequeno Almoco</option>
                        <option>Sobremesa</option>
                    </select>
                    </div>
                </div>
                    <div className="my-3 p-0">
                        <label for="" className="form-label">Descricao</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="my-3">
                        <label for="" className="form-label">Quantidade</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="my-3">
                        <label for="" className="form-label">Preco</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="my-3">
                        <label for="" className="form-label">Foto</label>
                        <input type="file" className="form-control" />
                    </div>
                    <button className="btn btn-primary my-3" style={{width:"5rem"}} type="button">Salvar</button>
                </div>
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                    <BiBeer className={styles.svg_bebida}/>
                </div>
            </form>
            <div className="container border p-0 mt-0">
                <table className="table table-bordered m-0">
                    <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descricao</th>
                        <th>Quantidade</th>
                        <th>Preco</th>
                        <th>Limite Vermelho</th>
                        <th>Data_Registro</th>
                        <th>Validade</th>
                        <th style={{width:"11.3rem"}} >Opcoes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="d-flex justify-content-center">Refrigerante</td>
                        <td>CocaCola</td>
                        <td>280</td>
                        <td>200MT</td>
                        <td>30</td>
                        <td>20/04/2022</td>
                        <td>12/03/2024</td>
                        <td className="p-1 d-flex justify-content-between">
                            <button className="btn btn-secondary" style={{width:"5rem"}} type="button">Editar</button>
                            <button className="btn btn-danger" style={{width:"5rem"}} type="button">Eliminar</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bebida