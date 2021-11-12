import "./header.css";

const Header = () => {
  return (
    <nav className="  navbar navbar-expand-lg navbar-light bg-light">
      <div className=" BarraNav container-fluid">
        <a className="navbar-brand " href="#">HALSEY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link texto" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>

          <button class="btn btn-outline-dark" type="submit" data-bs-toggle="modal" data-bs-target="#myModal">
        <i class="bi-cart-fill me-1"></i>
        Carrito
        <span id="contador" class="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>
        </div>
      </div>
      
    </nav>
  );
}

export default Header