import React, { useState, useEffect } from "react";
import  ItemDetail  from "../ItemDetail/ItemDetail";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const {itemId} = useParams ()

    useEffect(() => {

        const getProduct = new Promise( (resolve) => {
            setTimeout(() => {
                resolve(productos);

            }, 1000);
        });

        getProduct.then((result) => {
            itemId && setProduct (result.find ((item) => item.id ===
             itemId));
          
        });   
   
}, [itemId]);

return <ItemDetail {...product} />;
};