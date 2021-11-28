
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio  from './components/Inicio/Inicio';





function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Productos/" element={<ItemListContainer className="tracking-in-contract" greeting = "Bienvenidos a HALSEY" />}/>
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
      
      </Routes>
      
  
    </BrowserRouter>
  )
}
export default App
