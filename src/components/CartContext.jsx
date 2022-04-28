import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let i = cartList.map (product => product.idItem).indexOf(idItem);
        return cartList[i].qtyItem * cartList[i].costItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTaxes, 
            calcTotal,
            calcItemsQty
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;

/* import { createContext, useState } from "react";


const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState;

    const addToCart =(item, qty)=> {
        let found = cartList.find (item =>item.idItem === item.id)
        if (found === undefined) {
            setCartList ([
                ...cartList,
                {
                    idItem:item.id,
                    nameItem:item.name,
                    costItem:item.cost,
                    imgItem:item.image[0],
                    qtyItem:qty
                }
            ])
        }else {
            found.qtyItem += qty;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id)=> {
        let result = cartList.filter (item=>item.idItem!=id)
        setCartList(result); 
    }

    const calcTotalPerItem = (idItem)=> {
        let i = cartList.map(item=>item.idItem).indexOf(idItem);
        return cartList[i].costItem * cartList[i].qtyItem; 
    }

    const calcSubTotal = ()=> {
        let totalPerItem = cartList.map(item=> calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = ()=> {
        calcSubTotal()*0,21;
    }

    const calcTotal = ()=> {
        calcSubTotal();
    }

    const calcItemsQty = ()=> {
        let qtys = cartList.map(item=>item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


} */