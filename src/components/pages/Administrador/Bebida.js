import styles from "./Refeicoes.module.css"
import {BiBeer, BiDrink} from "react-icons/bi"
import Select from "../../form/Select"
import Input from "../../form/Input"
import Button from "../../form/Button"
import Table from "../../layout/TabelaBebida"
function Bebida(){
    var array = ["Selecione uma opcao","Sumo", "Agua", "Refrigerante"]
    return(
        <div className="container d-flex flex-column">
            <form className="d-flex mt-3">
                <div style={{width:"30%"}} >
                    <Select
                        text="Categoria"
                        name="s_bebidas"
                        options={array}
                    />
                    <Input
                        text="Descricao"
                        type="text"
                        name="descricao"
                        placeholder="Insira o nome ou marca de da bebida"
                        value=""
                        onChange=""
                    />
                    <Input
                        text="Quantidade"
                        type="number"
                        name="quantidade"
                        placeholder="Quantidade a ser registrada"
                        value=""
                        onChange=""
                    />
                    <Input
                        text="Preco"
                        type="number"
                        name="preco"
                        placeholder="Preco unitario da bebida"
                        value=""
                        onChange=""
                    />
                    <Input 
                        text="Foto"
                        type="file"
                    />
                    <Button
                        style="btn-primary my-3"
                        text="Salvar"
                    />
                </div>
                {/*Qui tal componentizar este elemento!*/}
                <div className="d-flex justify-content-center" style={{width: "70%"}}>
                    <BiBeer className={styles.svg_bebida}/>
                </div>
            </form>
            <Table />
        </div>
    )
}

export default Bebida