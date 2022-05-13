import styled from "styled-components";
import { mobile } from "../utils/responsive";

const Container = styled.div`
display: flex;
background: #f4f4f4;
@media(max-width: 767px) {
  flex-direction: column;
}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 0 20px;
`;

const Desc = styled.p`
// margin: 00px 0;
padding: 1rem 0;
`;

const SocialContainer = styled.div`
display: flex;
cursor:pointer;

`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor:pointer;
`;

const Center = styled.div`
flex: 1;
padding: 35px 20px;
   @media(max-width: 1000px) {
    display:none;
  } 
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
// flex-direction:column;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-top: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 35px 20px;
${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
  width: 30%;

`;

export {
    Container, Left, Desc, SocialContainer , SocialIcon, Center, Title, List,  ListItem, Right, ContactItem, Payment

}