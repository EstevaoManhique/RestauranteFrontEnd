function Input(props){
    return(
        <div className="my-3">
            <label htmlFor={props.name} className="form-label">{props.text}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                className="form-control" />
        </div>
    )
}

export default Input