import { Link } from "react-router-dom";
import LogoCart from "./LogoCart";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext)
    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"}>
            <button type="button" className="btn btn-warning position-relative">
            <LogoCart tamano= {15}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </button>
        </Link> : " "
        
    )
}

export default CartWidget;