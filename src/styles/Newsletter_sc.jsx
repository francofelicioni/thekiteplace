import styled from "styled-components";
import { mobile } from "../utils/responsive";

const Container = styled.div`
    height: 55vh;
    background-color: #242429;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    font-size: 60px;
    margin-bottom: 20px;

    @media(max-width: 767px) {
    font-size: 40px;
    }

    @media(max-width: 567px) {
    font-size: 25px;
    }
`;

const Desc = styled.div`
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    @media(max-width: 767px) {
    font-size: 1.2rem;
    text-align:center;
    padding-bottom: 20px;
    }

    @media(max-width: 567px) {
    font-size: 1rem;
    padding-bottom: 10px;
    }
`;

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 3px solid white;
${mobile({ width: "80%" })}
`;

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;

const Button = styled.button`
flex: 1;
border: none;
background-color: #2B5395;
color: white;
`;

export { Container, Title, Desc, InputContainer, Input, Button }