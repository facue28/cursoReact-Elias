

const ItemListContainer = ({cardTitle, cardText}) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{cardTitle} </h5>
                <p className="card-text">{cardText}</p>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    )
}

export default ItemListContainer;