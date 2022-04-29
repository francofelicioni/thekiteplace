import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";
// const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;