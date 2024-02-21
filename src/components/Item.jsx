import { Link } from "react-router-dom";

const Item = ({item}) => {
    
    return (
        <div className="col-md-3 my-2" >
            <div className="card my-2 h-100">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src= {item.image} className="card-img-top" alt={item.name}/>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{item.name}</h5>
                    </div>     
                </Link>
            </div>
        </div>
    )
}
{/* <Link to={"/item/" + item.id} className="btn btn-primary m-1"}> <Link/> */}

export default Item;