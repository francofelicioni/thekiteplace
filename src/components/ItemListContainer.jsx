import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';
import Slider from './Slider';

/* useEffect(() => {
    customFetch(500, products.filter(item => {
        if (idCategory === undefined) return item;
        return item.categoryId === parseInt(idCategory)
    }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, [data]); */ 

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);
    
    console.log (idCategory)

    if (idCategory == undefined)  {
        return(
                <>
                    <Slider /> 
                    <ItemList items={data} />
                </>
            );
    } else {
        return (
            <>
                <ItemList items={data} />
            </>
        )
    }
}

export default ItemListContainer;  