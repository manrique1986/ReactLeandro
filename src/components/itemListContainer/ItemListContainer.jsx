import React, { useState } from "react";
import "./index.css";
import ItemList from "../ItemList/ItemList";
import { productos } from "../Items/Items";

const ItemListContainer = ({ greeting }) => {
    

    const [items, setItems] = useState([]);


    const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
    traerProductos
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        })

    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p className= "tracking-in-contract">Cerveza artesanal</p>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;