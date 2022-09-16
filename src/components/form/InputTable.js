function InputTable(props){
    return(
        <div>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleEditFormChange}
                onClick={props.handleOnCancel}
                value={props.value}
                className=" form-control"
                style={{height:"2rem"}}
            />
        </div>
    )
}

export default InputTable