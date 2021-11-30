import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"
import "./index.css"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true)
    const [irAlCarrito, setIrAlCarrito] = useState(false)





    const { itemId } = useParams()

    useEffect(() => {

        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);

            }, 2000);
        });

        getProduct.then((result) => {
            itemId && setProduct(result.find((item) => item.id ===
                itemId));

        }).finally(() => {

            setLoader(false);

        })
            ;


    }, [itemId]);

    const addCart = (cantidad) => {
        console.log(cantidad, product);
        setIrAlCarrito(true);

    }




    return loader ? (
        <img className="gif" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    ) : <ItemDetail {...product} addCart={addCart} irAlCarrito={irAlCarrito} />;
};