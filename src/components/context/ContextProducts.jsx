import React from "react"
import { useState, useEffect, useContext } from "react";
import { addDoc,collection, getFirestore, getDocs } from 'firebase/firestore';


const Products = React.createContext()  

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])
    const [items, setItems] = useState([]);
    const db = getFirestore();
    const refCart = collection (db, 'cartItems')


    const isOnItem = (product) =>{

        return products?.findIndex(item => item.id===product.id)
    }




    useEffect(() => {
            
        getDocs(refCart)
          .then((res) => {
            setProducts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            });
          
            }) 



    const addItem = (product, cantidad) => {
        const indice = isOnItem(product) 
        if (indice === -1){

            addDoc(refCart,product)

        }else{
            alert("Ya se encuentra agregado al carrito")
        }

        
        
    }

    const deleteItem = (product) => {

        setProducts(products.filter(item => item.id !== product.id))
    
    }


    const clearItems = () => {
        setProducts([])
    }


    return (

        <Products.Provider value={{ products, addItem, deleteItem, clearItems }}>
            {children}
        </Products.Provider>
    )
}

// export function useDeleteProduct() {

//     return useContext (Products).deleteProduct
// }



export default Products