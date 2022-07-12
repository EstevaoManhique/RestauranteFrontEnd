function TabelaEstoque(){
    return(
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
    )
}

export default TabelaEstoque