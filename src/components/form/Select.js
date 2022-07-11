function Select(props){
    return(
        <div className="my-3">
            <label className="form-label" htmlFor={props.name}>{props.text}</label>                        
            <div className="d-flex flex-row">
                <select className="form-select" name={props.name}>
                    <option>Selecione uma opcao</option>
                    {props.options.map((option) =>(
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select