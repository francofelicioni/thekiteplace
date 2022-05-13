import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Container, Left, Desc, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem, Payment } from '../styles/Footer_sc';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="/"><img style={{height:95, width:200}} src="https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/logo-black.png?alt=media&token=b595db74-876c-4442-998f-5411e1e31163" alt="Logo Web"/></Link>
        <Desc>
          At The Kite Place, we understand the unbreakable bond between the elements and our tribe. We too feel the pull. This is Kiteboarding. This is Foiling. It Calls.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
             <a style={{textDecoration: "none", color: "white"}} href="www.facebook.com"><Facebook /></a>
          </SocialIcon>
          <SocialIcon color="EE2E79">
          <a style={{textDecoration: "none", color: "white"}} href="www.instagram.com"><Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a style={{textDecoration: "none", color: "white"}} href="www.twitter.com"><Twitter /></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Kites</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Foils</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Boards</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/><a href="https://goo.gl/maps/5JcgfU5m7mzbMwhL7" style={{textDecoration: "none", color: "black"}}>C. Batalla del Salado, 63, 11380 Tarifa, Cádiz, España </a>
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/><a href="tel:+34 123 456 789" style={{textDecoration: "none", color: "black"}}> +34 123 456 789 </a>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> <a href="mailto:contact@thekiteplace.com" style={{textDecoration: "none", color: "black"}}> contact@thekiteplace.com</a>
        </ContactItem>
        <Payment src="https://firebasestorage.googleapis.com/v0/b/kiteplace.appspot.com/o/btc-accepted.png?alt=media&token=1f181f3f-5ddd-4abc-926b-5e31e1ed35d2" />
      </Right>
    </Container>
  );
};

export default Footer;
