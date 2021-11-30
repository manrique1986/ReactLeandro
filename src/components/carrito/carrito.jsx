import { Link } from "react-router-dom"


const carrito = () => {



  return (

    <Link to="/cart">

      <button class="btn btn-outline-dark" type="submit" data-bs-toggle="modal" data-bs-target="#myModal">
        <i class="bi-cart-fill me-1"></i>
        Carrito
        <span id="contador" class="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>

    </Link>
  )
}

export default carrito