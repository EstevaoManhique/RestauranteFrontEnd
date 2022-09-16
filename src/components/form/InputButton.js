function InputButton({id, style, handleOnClick}){
    return(
        <>
            <input 
                style={{width:"3.9rem"}}
                className={`text-white btn btn-danger ${style}`}
                value={id}
                onClick={handleOnClick} 
                type="submit"                          
            />

        </>
    )
}

export default InputButton