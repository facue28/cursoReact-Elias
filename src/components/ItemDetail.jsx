import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }
    return (
        <div className="container-fluid text-center">
            <div className="row">
            <div className="col-md-6">
                <h3>{item.name}</h3>
                <img src={item.image}alt={item.name}/>
            </div>
            <div className="col-md-6">
                <h5>{item.descripcion}</h5>
                <h5>Productos en stock : {item.stock}</h5>
                <div className="container">
                    <h5>Precio $: {item.precio}</h5>
                    <ItemCount stock = {item.stock} onAdd={onAdd} />                
                </div>
            </div>
            </div>
        </div>
    )

}
export default ItemDetail;


