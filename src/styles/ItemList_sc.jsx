import styled from "styled-components";

const ProductsContainer = styled.div`
    padding: 7% 70px 10% 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 767px) {
        padding: 1% 10px;
    }
`;

export { ProductsContainer}
