function Span(props){
    return(
        <div class={`d-flex flex-row justify-content-${props.position}`}>
          <span><a href="#" class="text-white">Esqueceu a senha?</a></span> 
        </div>
    )
}

export default Span