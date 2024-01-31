import { Link } from "react-router-dom";

const Item = ({id, nombre,image}) => {
    
    return (
        
        <div className="card my-2 h-100">
            <img src= {image} className="card-img-top" alt={nombre}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{nombre}</h5>
                
                    <Link className="btn btn-primary m-1"to={`/item/${id}`}>Ver Mas</Link>
                    
            </div>     
        </div>
    )
}

export default Item;