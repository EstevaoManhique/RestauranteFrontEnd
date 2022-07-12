import styles from "./Funcionario.module.css"
import { BsFillPeopleFill } from "react-icons/bs"
import Input from "../../form/Input"
import Button from "../../form/Button"
import Tabela from "../../layout/TabelaFuncionario"
function Funcionario(){
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex mt-3">
                <div style={{width:"30%"}} >
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        placeholder="Insira o email do funcionario"
                        value=""
                        onChange=""
                    />
                    <Input
                        text="Nome"
                        type="text"
                        name="nome"
                        placeholder="Insira o nome do balconista"
                        value=""
                        onChange=""
                    />
                    <Input
                        text="Outros Nomes"
                        type="text"
                        name="outrosNomes"
                        placeholder="Outros Nomes"
                        value=""
                        onChange=""
                    />
                    <Input
                        text="Contacto"
                        type="number"
                        name="contact"
                        placeholder="Contacto o balconista"
                        value=""
                        onChange=""
                    />
                    <Button
                        style="btn-primary my-3"
                        text="salvar"
                    />
                </div>
                {/*Qui tal componentizar este elemento*/}
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                   <BsFillPeopleFill className={styles.svg_funcionario}/>
                </div>
            </form>
            <Tabela/>
        </div>
    )
}

export default Funcionario