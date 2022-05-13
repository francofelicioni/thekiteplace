import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    // flex-direction:column;
    margin: 20px 0px;

    @media (max-width: 767px) {
        margin-bottom: 5px;

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

export { Container, ProductAmountContainer, ProductAmount} 
