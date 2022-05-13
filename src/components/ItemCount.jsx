import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Container, ProductAmountContainer, ProductAmount} from '../styles/ItemCount_sc';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Container>
                <Button variant="text" onClick={increment}><Add /></Button>
                <ProductAmount>{count}</ProductAmount>
                <Button variant="text" onClick={decrement}><Remove /></Button>
            </Container>
            <Container>
                {
                    stock && count
                    ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                    : <Button variant="contained" disabled>Add to Cart</Button>
                }
            </Container>
        </ProductAmountContainer>
    );
}

export default ItemCount;