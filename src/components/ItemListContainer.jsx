
import { useState, useEffect } from "react"
import ItemContainer from "./ItemContainer"
import LoadingScreen from "./LoadingScreen"
import arrayProducts from "../../data/tiendOnProducts.json"


const ItemsListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(arrayProducts)

        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    },[])
        return loading ?(
            <LoadingScreen/>
        ):(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos</h1>
                    </div>
                </div>
                <div className="row ">
                    <ItemContainer products = {products} />
                </div>             
            </div>
        )
    
}




export default ItemsListContainer;