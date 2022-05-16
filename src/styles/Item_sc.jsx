import styled from "styled-components";

const Info = styled.div`
    position: absolute;
    /* top: 0px;
    left: 0px; */
    display: flex;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 3;
    align-items: center;
    justify-content: space-around;
    transition: all 1s ease;
`;


const ProductContainer = styled.div`
    border: 2px solid #f4f4f4;
    flex: 1;
    margin: 25px;
    max-width: 320px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4FCFF;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }

    @media(max-width: 768px) {
        justify-content: center;
    }
`;

const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    border: 2px solid #B03A60;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
    background-color: #e9f5f5;
        transform: scale(1.15);
    }
`;



export { ProductContainer, Circle, Image, Info, Icon }
