import styled from 'styled-components';

const ContentCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ImageCart = styled.img`
    width: 200px;
`;
const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const PriceDetail = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 20px 0;
    }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  @media (max-width: 767px) {
      font-size: 20px;
      margin: 0px;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  // flex-direction:column;
  margin: 20px 0px;

  @media (max-width: 767px) {
      margin-bottom: 5px;

  }
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: darkblue;

    @media (max-width: 767px) {
        font-size: 23px;
    }
`;

const TitleCart = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const WrapperCart = styled.div`
  padding: 50px;
  min-height:100vh;
  // width:90%;

  @media(max-width: 768px) {
      padding: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 40px 3px;
`;

const TopButton = styled.button`
    padding: 10px;
    width: 120px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "#242429" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
  font-weight: 600;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    // padding-bottom: 20px;
  }
  
`;

const Info = styled.div`
  flex: 3;
//   @media (max-width:768px) {
//       flex-direction: column;
//   }
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
  background-color: #242429;
  color: white;
  font-weight: 600;
`;

export { 
    ContentCart, Details, ImageCart, Price, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductDetail, ProductPrice, TitleCart, WrapperCart, Top, TopButton, TopText, Bottom, Info, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button
}
