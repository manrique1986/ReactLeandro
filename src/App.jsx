
import { Fragment } from 'react'
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';





function App() {
  return (

    <Fragment>
      <Header />
      <ItemListContainer greeting = "Bienvenidos a HALSEY" />
      
  
    </Fragment>
  )
}
export default App
