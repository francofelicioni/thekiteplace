import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><img style={{height:70, width:200}} src="https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/logo.png?alt=media&token=61cc2e18-278c-4a80-83cc-a0362e3b04e4" alt="Logo" /></Link>
                </Left>
                <Center>
                    <Link to='/category/kites' style={{textDecoration: "none", color: "white"}}><MenuItem>Kites</MenuItem></Link>
                    <Link to='/category/boards' style={{textDecoration: "none", color: "white"}}><MenuItem>Boards</MenuItem></Link>
                    <Link to='/category/foils' style={{textDecoration: "none", color: "white"}}><MenuItem>Foils</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;