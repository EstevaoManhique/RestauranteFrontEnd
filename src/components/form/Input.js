function Input(props){
    return(
        <div className="my-2">
            <label htmlFor={props.name} className={`form-label ${props.style}`}>{props.text}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
                value={props.value}
                className=" form-control"
                style={{height:"2rem"}}
                accept={props.accept}
            />
        </div>
    )
}

export default Input