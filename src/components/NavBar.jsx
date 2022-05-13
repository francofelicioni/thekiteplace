import { Link } from "react-router-dom";
import { NavContainer, Center, Left, MenuItem, Right } from '../styles/Navbar_sc';
import CartWidget from './CartWidget';
import BurgerBtn from "./BurgerBtn";
import { useState } from "react";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <Left>
                    <Link className="logo" to="/"><img style={{height: 70, width:200}} src="https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/logo.png?alt=media&token=6527fef0-426b-4a9d-85ca-e3931396f889" alt="Logo Web"/></Link> 
                    <Link className="logo-responsive" to="/"><img style={{height: 100, width:120}} src="https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/logofinal.png?alt=media&token=c5649519-a013-4ca4-ac07-91d84c9a063f" alt="Logo Web"/></Link>
                </Left>
                <Center>
                    <div className={`links ${clicked ? 'active' : ''}`}>
                        <Link to='/category/kites' style={{textDecoration: "none", color: "white"}}><a>Kites</a></Link>
                        <Link to='/category/boards' style={{textDecoration: "none", color: "white"}}><a>Boards</a></Link>
                        <Link to='/category/foils' style={{textDecoration: "none", color: "white"}}><a>Foils</a></Link>
                    </div>
                    <div className="burger">
                        <BurgerBtn clicked={clicked} handleClick={handleClick} />
                    </div> 
                </Center>  
                <Right>
                    <Link to='/cart' style={{textDecoration: "none", color: "white"}}><MenuItem><CartWidget/></MenuItem></Link>
                </Right>
            </NavContainer>
        </>
    )
}
export default Navbar;