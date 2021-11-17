import { Fragment } from 'react'
import './App.css';
import Header from './components/Header/Header';
import ItemCount from './components/itemCount/itemCount';
import ItemListContainer from './components/itemListContainer/itemListContainer';





function App() {
  return (

    <Fragment>
      <Header />
      <ItemListContainer greeting = "Bienvenidos a HALSEY" />
      <ItemCount inicial = {0} />
  
    </Fragment>
  )
}
export default App
