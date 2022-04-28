import { Badge } from "@material-ui/core";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
            <ShoppingCartTwoToneIcon />
        </Badge>
    );
}

export default CartWidget;