import { Send } from "@material-ui/icons";
import { Container, Title, Desc, InputContainer,Input, Button } from '../styles/Newsletter_sc';

const Newsletter = () => {
  return (
    <Container>
      <Title>LET'S STAY IN TOUCH</Title>
      <Desc>Loop in for the latest news and team rider antics from The Kite Place.</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
