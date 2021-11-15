
import './App.css';
import Header from './components/Header/Header';
import ItemCount from './components/itemCount/itemCount';
import ItemListContainer from './components/itemListContainer/itemListContainer';





function App() {
  return (

    <fragment>
      <Header />
      <ItemListContainer saludo = "Bienvenidos a HALSEY" />
      <ItemCount />
    </fragment>
  )
}
export default App
