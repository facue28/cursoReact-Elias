import React from 'react'

const ItemDetail = ({product}) => {
    
    return (
        <div className="container-fluid text-center">
            <div className="row">
            <div className="col-md-4">
                <h3>{product.nombre}</h3>
                <img src={product.image}alt={product.nombre}/>
            </div>
            <div className="col-md-6">
                <h4>{product.descripcion}</h4>
                <h5>Productos en stock : {product.stock}</h5>
                <div className="container">
                    <h5>Precio $: {product.precio}</h5>
                    <button type="button" className="btn btn-secondary">+</button>
                    <button type="button" className="btn btn-secondary">-</button>
                    <button type="button" className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
            </div>
        </div>
    )

}
export default ItemDetail;


