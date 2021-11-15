import { useState } from "react"
import "./index.css"


function ItemCount (inicial){
    const [number, setNumber]= useState(0)

    const agregar = () =>{
        setNumber (number + 1)
    }

    const restar = () =>{
        if ( number > 0 ){
            setNumber (number - 1)
        }
    }

    return (
        <div className = "button" >
        <button className = "sumar"onClick={agregar}>+</button>
        <h1> {number}</h1>
        <button className = "restar"onClick={restar}>-</button>

       </div>      
            
            
    )
}
    
export default ItemCount