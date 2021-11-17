import react, {useState} from "react";
import "./index.css";
import ItemList from "./itemList/itemList";
import {productos} from "./items/items";

function itemListContainer({ greeting }) {
    const[items, setItems] = useState = ([]);

    const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
    traerProductos.then((res) => {
        setItems(res);  
    })
    .catch((error) => {
        console.log(error);
    })

    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p>Cerveza artesanal</p>
            <ItemList items={items} />
        </div>
    );
}

export default itemListContainer;