
import { Fragment } from 'react'
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (

    <Fragment>
      <Header />
      <ItemListContainer className="tracking-in-contract" greeting = "Bienvenidos a HALSEY" />
      <ItemDetailContainer />
      
  
    </Fragment>
  )
}
export default App
