function Button(props){
    return(
        <button onClick={(e) =>{props.handleOnClick(e, props.object)}} type="button" className={`btn ${props.style}`}>
            {props.text}
        </button>
    )
}

export default Button