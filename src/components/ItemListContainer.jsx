import ItemList from './ItemList';
// import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// const { products } = require('../utils/products');
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { firestoreFetch } from '../utils/firestoreFetch';
// import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    
    /* useEffect(() => {
        customFetch(500, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]); */

  useEffect(() => {
        const fetchFromFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const datafromFirestore = querySnapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }));
            return datafromFirestore; 
        }
        fetchFromFirestore()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err));
    }, [datos]);
    
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
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer; 