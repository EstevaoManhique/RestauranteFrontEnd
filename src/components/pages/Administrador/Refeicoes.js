import styles from "./Refeicoes.module.css"
import {GiMeal} from "react-icons/gi"
import Select from "../../form/Select"
import Input from "../../form/Input"
import Button from "../../form/Button"
import Table from "../../layout/TabelaRefeicao"
function Refeicoes(){
    var array = ["Lanche", "Pequeno Almoco", "Sobremesa"]
    
    return(
        <div className="container d-flex flex-column my-0">
            <form className="d-flex mt-3" >
                <div className="my-0 py-0" style={{width:"30%"}}>
                    <Select
                        text="Categoria"
                        name="s_refeicoes"
                        options={array}
                    />
                    <Input
                        text="Descricao"
                        type="text"
                        name="descricao"
                        placeholder="Descreva a refeicao"
                        onChange=""
                        value=""
                    />
                    <Input
                        text="Preco"
                        type="number"
                        name="descricao"
                        placeholder="Defina o preco"
                        onChange=""
                        value=""
                    />
                    <Input
                        text="Foto"
                        type="file"
                        name="foto"
                        onChange=""
                        value=""
                    />
                    <Button
                        style = "btn-primary my-3"
                    />
                </div>
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                    <GiMeal className={styles.svg_refeicoes}/>
                </div>
            </form>
            <Table />
        </div>
    )
}

export default Refeicoes