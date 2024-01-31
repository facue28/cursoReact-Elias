 import { useEffect, useState } from "react"
        import { useParams } from "react-router-dom"
        import ItemDetail from "./ItemDetail"
        import products from "../../data/tiendOnProducts.json"
        
        const ItemDetailContainer = () => {
            const {id} = useParams()
            const [product, setProduct ]= useState ([])
            const [error, setError] = useState(null)
        
        
            useEffect(() => {
                const fetchProduct = () => {
                    console.log(products)
                    console.log(id)
                    try {
                        const findProduct = products.find(product => product.id === parseInt(id))
                        console.log(findProduct)
                        
                        if (findProduct) {
                            setProduct(findProduct)
                        } else {
                            setError(new Error("Producto no encontrado"))
                        }
                    } catch (error) {
                        setError(error)
                    }
                }
                fetchProduct();
                
            },[id]);
        
            return (
                <>
                    <ItemDetail
                        id= {id}
                        nombre= {product.nombre}
                        descripcion= {product.descripcion}
                        precio= {product.precio}
                        stock={product.stock}
                        image={product.image}
                    /> 
                    
                </>
            )
        }
export default ItemDetailContainer;

