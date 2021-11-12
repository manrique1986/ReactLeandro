
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/itemListContainer';




function App() {
  return (

    <fragment>
      <Header />
      <ItemListContainer saludo = "Bienvenidos a HALSEY" />
    </fragment>
  )
}
export default App
