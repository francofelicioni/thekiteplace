import styled from "styled-components";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh"})}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.a`
  padding: 10px;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  // color: #242429;
  border: 2px solid #white;
`;

export {
    Container, Image, Info, Title, Button
}