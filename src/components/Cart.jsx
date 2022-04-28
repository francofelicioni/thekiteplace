import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { ContentCart, Details, ImageCart, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductDetail, ProductPrice, TitleCart, WrapperCart } from "./styledComponents";

const Top = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px 3px;
`;

const TopButton = styled.button`
padding: 10px;
width: 120px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 45vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align:center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number)}</span>
}

const Cart =()=> {
    const test = useContext(CartContext);

    return(
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
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
                                <ProductAmount>€ {item.costItem} each</ProductAmount>
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
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    )
}

export default Cart;