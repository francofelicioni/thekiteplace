import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2'
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, InfoContainerRight, PriceContainer, Units } from '../styles/ItemDetail_sc';

/* const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;
const ContainerPpal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:50px;
`;
 */

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        Swal.fire({
            title: 'Product added',
            text: 'You have selected ' + qty + ' items.',
            icon: 'success',
            confirmButtonText: 'Close'
        })
        // alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                    </InfoContainer>
                    <PriceContainer>
                        <Price>€ {item.cost}</Price>
                        <Units>{item.stock} unidades en stock</Units>
                        {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                        }
                    </PriceContainer>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;