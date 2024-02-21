import { useState } from "react";
import { useEffect } from "react"
import ItemList from "./ItemList"
import LoadingScreen from "./LoadingScreen"
// import arrayProducts from "../../data/tiendOnProducts.json"
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from "react-router-dom"

const ItemsListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true);

    ///Firebase
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(consulta).then((resp) =>{
            setLoading(false)
            setItems(resp.docs.map(producto => ({id:producto.id, ...producto.data()})))
        })
    }, [id])

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos</h1>
                    </div>
                </div>
                <div className="row ">
                    {loading ? <LoadingScreen/> : <ItemList items = {items} /> }
                </div>             
            </div>
        )
    
}




export default ItemsListContainer;

// useEffect(()=>{
//     setProducts(arrayProducts)

//     setTimeout(()=>{
//         setLoading(false)
//     }, 2000)
// },[])