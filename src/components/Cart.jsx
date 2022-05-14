import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ContentCart, Details, ImageCart, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductDetail, ProductPrice, TitleCart, WrapperCart, Top, TopButton, TopText, Bottom, Info, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from "../styles/Cart_sc";
import Swal from 'sweetalert2';


const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number)}</span>
}

const Cart =()=> {
    const test = useContext(CartContext);

    const checkout = ()=> {
    
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });

        let order = {
            buyer: {
                name: "Jose Manuel Alonso Serafin",
                email: "josealonso@gmail.com",
                phone: "1164717157"
            },
            date: serverTimestamp(),
            items: test.cartList.map (item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.costItem,
                qty: item.qtyItem
            })),
            total: test.calcTotal(),
        }
        
        const createFirestoreOrder = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createFirestoreOrder()
            .then (result => 
                            Swal.fire({
                                title: 'Order confirmed',
                                text: 'The number of your purchase is: \n\n\n' + result.id,
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            }))
            .catch(err => console.log(err));
        test.removeList();
    }

    return(
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty 🛒</TopText>
                }
            </Top>
            <ContentCart>
                <Bottom>
                    <Info>
                        {
                            test.cartList.length > 0 &&
                                test.cartList.map(item => 
                                <Product key={item.idItem}>
                                    <ProductDetail>
                                        <ImageCart src={item.imgItem} />
                                        <Details>
                                        <span>
                                            <b>Product:</b> {item.nameItem}
                                        </span>
                                        <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</TopButton>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <ProductAmount>{item.qtyItem} item (s)  /</ProductAmount>
                                            <ProductAmount>€ {item.costItem} each =</ProductAmount>
                                        </ProductAmountContainer>
                                        <ProductPrice>Total € {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                                    </PriceDetail>
                                </Product>
                                )
                        }
                    </Info>
                    {
                        test.cartList.length > 0 &&
                            <Summary>
                                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>VAT (21%)</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>VAT Discount</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                                </SummaryItem>
                                <Button onClick={checkout}>CHECKOUT NOW</Button>
                            </Summary>
                    }
                </Bottom>
            </ContentCart>
        </WrapperCart>
    )
}

export default Cart;