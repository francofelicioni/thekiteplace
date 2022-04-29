import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
/* import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'; */
import { firestoreFetch } from '../utils/firestoreFetch';

    
    /* useEffect(() => {
        customFetch(500, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [data]); */

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;