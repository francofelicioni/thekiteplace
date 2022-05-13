import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Button } from '../styles/CategoryItem_sc';

const CategoryItem = ({ item }) => {
  console.log('desde id:',(item.id))
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link  to='/category/kites' style={{textDecoration: "none"}}><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
