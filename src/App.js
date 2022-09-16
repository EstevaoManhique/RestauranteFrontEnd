import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./components/pages/Administrador/Inicio"
import Login from "./components/pages/Administrador/Login"
import Menu from "./components/pages/Administrador/Menu";
import Refeicoes from "./components/pages/Administrador/Refeicoes";
import Bebida from "./components/pages/Administrador/Bebida";
import Funcionario from "./components/pages/Administrador/Funcionario";
import Estoque from "./components/pages/Administrador/Estoque";
import Relatorio from "./components/pages/Administrador/Relatorio";
import Start from "./components/pages/Administrador/Start";
function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/refeicoes" element={<Refeicoes />}/>
          <Route path="/bebida" element={<Bebida />} />
          <Route path="/funcionario" element={<Funcionario />}/>
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/relatorio" element={<Relatorio />}/>
      </Routes>
    </Router>
  )
}

export default App;