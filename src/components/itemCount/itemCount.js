import { useState } from "react"

function itemCount (){
    const [number, setNumber]= useState(10)

    const agregar = () =>{
        setNumber (number + 1)
    }

    const restar = () =>{
        setNumber (number - 1)
    }

    return (
        <fragment>
        <button onClick={agregar}>+</button>
        <h1> {number}</h1>
        <button onClick={restar}>-</button>

       </fragment>    
            
            
    )
}
    
export default itemCount