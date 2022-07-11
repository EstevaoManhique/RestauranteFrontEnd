import Button from "../form/Button"

function Table(){
    return(
        <div className="container border p-0 m-0">
            <table className="table table-bordered m-0">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descricao</th>
                        <th>Preco</th>
                        <th>Foto</th>
                        <th style={{width:"12rem"}}>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Almoco</td>
                    <td>Frango A nossa Maneira</td>
                    <td>280MT</td>
                    <td>Foto</td>
                    <td className="p-1 d-flex justify-content-around">
                        <Button style="btn-secondary my-0"/>
                        <Button style="btn-danger my-0"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table