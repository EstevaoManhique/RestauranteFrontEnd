function SelectArray(props){
    return(
        <div className="my-3 w-100">
            <label className="form-label" htmlFor={props.name}>{props.text}</label>                        
            <div className="d-flex flex-row">
                <select className="form-select"
                    name={props.name}
                    onChange={props.handleOnChange}
                >
                    {props.produtos.map((produto) =>(
                        <option value={produto} key={produto}>{produto}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectArray