function Button(props){
    return(
        <button className={`btn ${props.style}`} style={{width:"5rem"}} type="button">
            Salvar
        </button>
    )
}

export default Button