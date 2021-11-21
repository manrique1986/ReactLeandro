import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { productos } from "../Items/Items";



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {

        const getProduct = new Promise( (res) => {
            setTimeout(() => {
                res(productos[0]);

            }, 2000);
        });

        getProduct.then((result) => {
            setProduct (result);
        });   
   
}, []);

return <ItemDetail  {...product} />;
}