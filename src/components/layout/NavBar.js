import react from "react"
import {Nav, NavItem, NavLink} from "reactstrap"
import {FaCloudUploadAlt} from "react-icons/fa"
import {AiOutlineStock} from "react-icons/ai"
import {GiMeal} from "react-icons/gi"
import {BiDrink} from "react-icons/bi"
import {TbReport} from "react-icons/tb"
import {BsHouseFill, BsFillMenuAppFill, BsMenuApp, BsEmojiNeutral, BsFillPeopleFill, BsRainbow} from 'react-icons/bs'
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

function NavBar(){
    return(
    <div style={styles.wrapper}>
        <Nav className="bg-dark justify-content-around" tabs>
            <div className="d-flex flex-row">
                <BsHouseFill className="text-white"/><h5>Restaurante Manhique</h5>
            </div>
            <NavItem>
                <NavLink style={{fontSize:"20px"}}
                    href="#">
                   <Link to="/inicio">
                        <BsHouseFill className="text-4" /> Inicio
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{fontSize:"20px"}} href="#">
                    <Link to="/menu">
                        <BsFillMenuAppFill/> Menu
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                 <NavLink style={{fontSize:"20px"}} href="#">
                    <Link to="/refeicoes">
                        <GiMeal/> Refeicoes
                    </Link>
               </NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{fontSize:"20px"}} href="#" >
                    <Link to="/bebida">
                        <BiDrink/> Bebida
                    </Link>
                </NavLink>
                </NavItem>
            <NavItem>
                <NavLink style={{fontSize:"20px"}} href="#" className="active bg-transparent text-success">
                    <Link to="/funcionario">
                        <BsFillPeopleFill/> Funcionario
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{fontSize:"20px"}} href="#">
                    <Link to="/estoque">
                        <AiOutlineStock/> Estoque
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{fontSize:"20px"}} className="text-white" href="#">
                    <Link to="/relatorio">
                        <TbReport/> Relatorio
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    </div>
    )
}

export default NavBar