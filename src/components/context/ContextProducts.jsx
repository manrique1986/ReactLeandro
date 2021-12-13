import React from "react"
import { useState, useEffect, useContext } from "react";


const Products = React.createContext()  

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])



    const addItem = (product, cantidad) => {

        setProducts(products.concat(product))
        
    }

    const deleteItem = (product) => {

        setProducts(products.filter(item => item.id !== product.id))
    
    }


    return (

        <Products.Provider value={{ products, addItem, deleteItem }}>
            {children}
        </Products.Provider>
    )
}

// export function useDeleteProduct() {

//     return useContext (Products).deleteProduct
// }



export default Products