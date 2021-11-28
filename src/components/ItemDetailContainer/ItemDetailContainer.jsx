import React, { useState, useEffect } from "react";
import  ItemDetail  from "../ItemDetail/ItemDetail";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"
import "./index.css"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true)



    const {itemId} = useParams ()

    useEffect(() => {

        const getProduct = new Promise( (resolve) => {
            setTimeout(() => {
                resolve(productos);

            },2000);
        });

        getProduct.then((result) => {
            itemId && setProduct (result.find ((item) => item.id ===
             itemId));
          
        }) .finally (() => {

            setLoader(false);

        })
        ;   
   
}, [itemId]);

return loader ? (
    <img className="gif" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
): <ItemDetail {...product} />;
};