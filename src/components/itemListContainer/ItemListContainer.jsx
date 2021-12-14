import React, { useState, useEffect } from "react";
import "./index.css";
import ItemList from "../ItemList/ItemList";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"
// import { getDocs, collection, getFirestore } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {

    //     const db = getFirestore()
    //     const ref = collection(db, 'products')
    //     getDocs(ref)
    //     .then((snapShot) => {
    //         setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
    //         /* snapShot.docs.map((product) => setProducts(prev => ([...prev, product.data()]))) */
    //         setIsLoading(false)
    //       })

    // }, []);





    const [items, setItems] = useState([]);



    useEffect(() => {
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
            });
    }, []);


    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p className="tracking-in-contract">Cerveza artesanal</p>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;