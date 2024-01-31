import { useEffect, useState } from "react";
import arrayProducts from "../../data/tiendOnProducts.json"
import Item from "./Item";

// const [productsItem, setProductsItem] = useState ([])

//  useEffect(() => {
    //          setProductsItem(arrayProducts)
    //  },[] )
    
    const ItemContainer = ({products}) => {
        console.log(products)
    return (
        <>
            {products.map (product =>(
                <div key={product.id} className="col-md-3 my-2" >
                    <Item 
                    id = {product.id}
                    nombre = {product.nombre}
                    descripcion = {product.descripcion}
                    image = {product.image}
                    precio = {product.precio}
                    />
                </div>
            ))}
        </>
    )
}


export default ItemContainer;
