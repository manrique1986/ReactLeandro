
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import  {ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Galeria from './components/Galeria/Galeria'
import Cart from './components/Cart/Cart'
import FinalizePurchase from './components/FinalizePurchase/FinalizePurchase'
import { ProductsProvider } from './components/context/ContextProducts'






function App() {
  return (

    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Productos/" element={<ItemListContainer className="tracking-in-contract" greeting="Bienvenidos a HALSEY" />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Cart/" element={<Cart />} />
          <Route path="FinalizePurchase/" element={<FinalizePurchase />} />

        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  )
}
export default App
