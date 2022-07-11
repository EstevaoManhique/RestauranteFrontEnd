import styles  from "./Login.module.css"
import bg from "./—Pngtree—black hand-painted kitchen menu psd_997935.jpg"
function Login(){
    return(
        <form id="form" class="container p-0 rounded border my-5 card d-flex flex-column border-0" style={{width: "30rem"}}>
        <div class="w-100">
          <img class="w-100 rounded" src={bg} alt=""/>
        </div>
        <div class="card bg-transparent border card-img-overlay">
          <div class="d-flex my-5 justify-content-center">
            <h1 class="text-white">Login</h1>
          </div>
          <div class="input">
            <label class="form-label text-white">Email</label>
            <input
              class="form-control"
              type="email"
              placeholder="Digite o seu email"/>
          </div>

          <div class="input mb-3">
            <label class="form-label text-white">Senha</label>
            <input 
              class="form-control"
              type="password"
              placeholder="Digite a sua senha"
            />
            <div class="d-flex flex-row justify-content-end">
              <span><a href="#" class="m-auto text-white">Esqueceu a senha?</a></span> 
            </div>
            <button type="submit" class="btn btn-outline-secondary mt-3 border text-white" style={{width: "100%"}} >Entrar</button>
          </div>
        </div>
    </form>
    )
}

export default Login