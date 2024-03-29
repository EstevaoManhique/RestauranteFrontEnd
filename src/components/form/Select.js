function Select(props){
    return(
        <div className="my-3 w-100">
            <label className="form-label" htmlFor={props.name}>{props.text}</label>                        
            <div className="d-flex flex-row">
                <select className="form-select"
                    name={props.name}
                    onChange={props.handleOnChange}
                >
                    <option value="Selecione uma opcao">Selecione uma opcao</option>
                    {props.categorias.map((categoria) =>(
                        <option value={categoria.descricao} key={categoria.id}>{categoria.descricao}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select