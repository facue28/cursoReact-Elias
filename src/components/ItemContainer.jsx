

const ItemContainer = ({id, image, titulo, nombre, stock, precio}) => {
    return (
        <div className="col-md-3 my-2" key={id}>
                        <div className="card my-2 h-100">
                            <img src= {image} className="card-img-top" alt={titulo}/>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{nombre}</h5>
                                {stock > 0 ? (
                                    <a href="#" className="btn btn-primary m-1 ">{Number(precio).toLocaleString()}</a>
                                ): (<a href="#" className="btn btn-primary m-1">No disponible</a>)
                                }                         
                            </div>
                        </div>
                    </div>
    )
}

export default ItemContainer;