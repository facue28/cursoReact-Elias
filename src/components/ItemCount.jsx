import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }


    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }


    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            console.log("agregaste" + {counter})
        }
    }


    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    return (
        <>
        <div className="btn-group" role="group" aria-label="Carrito" >
            <button type="button" className="btn btn-secondary" onClick={decrementar}>-</button>
            <button type="button" className="btn btn-secondary"> {counter}</button>
            <button type="button" className="btn btn-secondary" onClick={incrementar} >+</button>
        </div>
        <div className="row m-2">
            <div className="col">
                {itemAdded ? 
                <>
                <Link to={"/"} className="btn btn-success my-3"> Seguir comprando</Link>
                <br />
                <Link to= {"/cart/"} className="btn btn-warning m-3"> Finalizar compra</Link> 
                </>
                : 
                <button type= "button" className="btn btn-warning" onClick={addToCart}>Agregar al carrito</button> 
                    }
            </div>
        </div>
        </>
    )
}

export default ItemCount;