import { Link } from "react-router-dom"
import { useContext} from "react"
import ContextProduct from "../context/ContextProducts"

const CartWidget = () => {

  const { products } = useContext(ContextProduct)



  return (

    <Link to="/cart">

      <span>
        {
          (products.length !== 0) ?

            <button className="btn btn-outline-dark" type="submit" data-bs-toggle="modal" data-bs-target="#myModal">
              <i className="bi-cart-fill me-1"></i>
              Carrito
              <span id="contador" className="badge bg-dark text-white ms-1 rounded-pill">{products.length}</span>
            </button>
            :
            <span></span>
        }
      </span>



    </Link>
  )
};

export default CartWidget