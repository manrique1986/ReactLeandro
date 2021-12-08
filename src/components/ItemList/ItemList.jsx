import Item from '../Item/Item';
import { useContext} from "react"
import Products from '../context/ContextProducts'


function  ItemList ({items}) {

    const {products} = useContext(Products)



    return (

        <>

        {items.map((item) =>(

           <Item key={item.id} item={item} />
        ))}

        </>
    );
};

export default ItemList  