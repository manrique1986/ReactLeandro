import ItemCount from "../ItemCount/ItemCount"




const item = ({item}) =>{
     
    return (
     
        <div>

        <img src= {item.img} alt="producto"/>
        <ItemCount />

            
        </div>
    )

}


export default item