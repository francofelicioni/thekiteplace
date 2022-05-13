import { Link } from 'react-router-dom';
import { LocalOfferOutlined } from '@material-ui/icons';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { ProductContainer, Circle, Image, Info, Icon } from '../styles/Item_sc';

const Item = ({ id, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>  
                <Icon>
                    <strong>€ {price}</strong><LocalOfferOutlined />
                </Icon>
                <Icon>
                    <strong> {stock} units</strong>
                </Icon>
                <Icon style={{ cursor: "pointer"}}>
                    <Link to={`/item/${id}`} style={{textDecoration: "none", color: "black", }}><ShoppingBasketOutlinedIcon  /> <strong>Buy</strong></Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;