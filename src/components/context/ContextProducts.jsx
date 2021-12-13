import React from "react"
import { useState, useEffect, useContext } from "react";


const Products = React.createContext()  

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])



    const addItem = (product, cantidad) => {

        setProducts(products.concat(product))
        
    }

    /*const deleteProduct = (product) => {

        setProducts(products.filter(item => item.id !== product))
    }*/




    return (

        <Products.Provider value={{ products, addItem }}>
            {children}
        </Products.Provider>
    )
}

export function useDeleteProduct() {

    return useContext (Products).deleteProduct
}



export default Products