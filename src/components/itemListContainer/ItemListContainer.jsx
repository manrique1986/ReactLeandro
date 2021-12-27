import React, { useState, useEffect } from "react";
import "./index.css";
import ItemList from "../ItemList/ItemList";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"
import db from '../firebase/firebase.jsx';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])


    // const [items, setItems] = useState([]);

    // const { catId } = useParams();

    // useEffect(() => {
    //     const traerProductos = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productos);
    //         }, 1000);
    //     });
    //     traerProductos
    //         .then((res) => {
    //             catId
    //                 ? setItems(res.filter((item) => item.category === catId))
    //                 : setItems(res);
    //         })

    // }, [catId]);


    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const refCart = collection (db, 'cartItems')
    const { catId } = useParams();




    useEffect(() => {
        setLoader(true);
        
        const myItems = catId
          ? query(collection(db, 'productos'), where('category', '==', catId))
          : collection(db, 'productos');
       
            
        getDocs(myItems)
          .then((res) => {
            const results = res.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
          
            setItems(results);
            }) 
          .finally(() => setLoader(false));


          
      }, [catId]);
      console.log (productos)


    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p className="tracking-in-contract">Cerveza artesanal</p>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;