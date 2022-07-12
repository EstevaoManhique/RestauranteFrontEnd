function Button(props){
    return(
        <button className={`btn ${props.style}`} type="button">
            {props.text}
        </button>
    )
}

export default Button