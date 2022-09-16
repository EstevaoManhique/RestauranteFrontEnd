function ButtonSubmit(props){
    return(
        <button onClick={props.handleOnCancel} className={`btn ${props.style}`}>
            {props.text}
        </button>
    )
}

export default ButtonSubmit