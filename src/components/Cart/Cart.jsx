import { useContext } from "react"
import ContextProduct from "../context/ContextProducts"


const Cart = () => {
    const { products } = useContext(ContextProduct)




    return (
        <div>
            {products?.map((product) => {
                return (

                    <div>
                        <h1>{product.name}</h1>
                        <img src={product.img} alt="" />
                        <h3>${product.price}</h3>
                        <button >Eliminar</button>
                        


                    </div>



                )

            })}
        </div>
    )
}

export default Cart