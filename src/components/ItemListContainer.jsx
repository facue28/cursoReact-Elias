
import { useState, useEffect } from "react"
import ItemContainer from "./ItemContainer"


const ItemsListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect (() =>{
        fetch("../../data/tiendOnProducts.json")
        .then((resp) => resp.json())
        .then((data) => {
            setData(data)
        })
        // prueba de carga
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    },[])
    
    return loading ?(
        <div className="container m-5 p-5">
            <div class="text-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
    ):(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos</h1>
                </div>
            </div>
            <div className="row ">
                {data.map((data) =>(
                    <>
                    <ItemContainer {...data} />
                    </>
                ))}
            </div>             
        </div>
    )
}





export default ItemsListContainer;