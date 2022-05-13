import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #B03A60;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  // font-weight:bold;

  @media(max-width: 568px) {
    display:none;
  }
`;

export { 
    Container
}