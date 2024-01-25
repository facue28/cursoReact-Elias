
import { useState, useEffect } from "react"
import data from "../../data/tiendOnProducts.json"

const ItemsContainer = () => {

    const [data, setData] = useState([])
 
    useEffect (() =>{
        fetch("../../data/tiendOnProducts.json")
        .then((resp) => resp.json())
        .then((data) => {
            setData(data)
        })
    },[])

    

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos</h1>
                </div>
            </div>
            <div className="row ">
                {data.map((data) =>(
                    <div className="col-md-3 my-2" key={data.id}>
                        <div className="card my-2 h-100">
                            <img src= {data.image} className="card-img-top" alt={data.titulo}/>
                            <div className="card-body">
                                <h5 className="card-title">{data.nombre}</h5>
                                <div className="container  ">
                                <a href="#" className="btn btn-primary m-1 ">{data.precio}</a>
                                </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>             
        </div>
    )
}




export default ItemsContainer;