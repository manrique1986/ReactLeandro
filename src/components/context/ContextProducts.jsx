import React from "react"
import { useState, useEffect } from "react";


const Products = React.createContext()

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])

    const addItem = (product, cantidad) => {

        setProducts(products.concat(product))
    }





    return (

        <Products.Provider value={{ products, addItem }}>
            {children}
        </Products.Provider>
    )
}



export default Products