import styles from "./Funcionario.module.css"
import { BsFillPeopleFill } from "react-icons/bs"
function Funcionario(){
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex mt-3">
                <div style={{width:"30%"}} >
                    <div className="my-4 p-0">
                        <label for="" className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="my-4">
                        <label for="" className="form-label">Nome</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="my-4">
                        <label for="" className="form-label">Outros Nomes</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <label for="" className="form-label">Contacto</label>
                        <input type="number" className="form-control" />
                    </div>
                    <button className="btn btn-primary my-3" style={{width:"5rem"}} type="button">Salvar</button>
                </div>
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                   <BsFillPeopleFill className={styles.svg_funcionario}/>
                </div>
            </form>

            <div className="container border p-0">
                <table className="table table-bordered m-0 table-hover">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Nome</th>
                            <th>Outros Nomes</th>
                            <th>Contacto</th>
                            <th>Estado</th>
                            <th style={{width:"11.3rem"}}>Opcoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>estevaomanhique68@gmail.com</td>
                            <td>Estevao Noe</td>
                            <td>Manhique Junior</td>
                            <td>+2588845674766</td>
                            <td>Activo</td>
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

export default Funcionario