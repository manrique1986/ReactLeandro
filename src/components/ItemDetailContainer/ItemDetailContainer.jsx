import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../Items/Items";
import { useParams } from "react-router-dom"
import "./index.css"
import db from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true)
    const [irAlCarrito, setIrAlCarrito] = useState(false)





    // const { itemId } = useParams()

    // useEffect(() => {

    //     const getProduct = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(productos);

    //         }, 2000);
    //     });

    //     getProduct.then((result) => {
    //         itemId && setProduct(result.find((item) => item.id ===
    //             itemId));

    //     }).finally(() => {

    //         setLoader(false);

    //     })
    //         ;


    // }, [itemId]);

    const addCart = (cantidad) => {

         setIrAlCarrito(true);

        console.log({ ...product, cantidad: cantidad });

     }






    const [detail, setDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams();
    
   
    useEffect(() => {
      setIsLoading(true);
  
      const myItem = doc(db, 'productos', itemId);

  
      
      getDoc(myItem)
        .then((res) => {
          const result =  { id: res.id, ...res.data() };
          setDetail(result);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [itemId]);


    




    return  <ItemDetail product={detail} addCart={addCart} irAlCarrito={irAlCarrito}  />;

    
};