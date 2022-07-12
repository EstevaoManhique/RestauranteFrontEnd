function TabelaFuncionario(){
    return(
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
    )
}

export default TabelaFuncionario