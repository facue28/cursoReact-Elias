import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";


const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() === 0 ) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">X</p>
                        <div className="alert alert-danger" role="alert">
                        No hay productos en el carrito
                        </div>
                        <Link to = {"/"} className="btn btn-warning my-4">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2>Productos seleccionados</h2>
                </div>
            </div>
            <div className="row">
                <table className="table">
                    <tbody>
                        <tr>
                        <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn btn-warning">Eliminar productos <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                        </tr>
                        {cart.map(product =>
                            <tr key={product.id}>
                                <td className="align-middle"><img src={product.image} alt={product.name} width={80} /></td>
                                        <td className="text-start align-middle">{product.name}</td>
                                        <td className="text-start align-middle">${product.precio}</td>
                                        <td className="text-start align-middle">{product.quantity}</td>
                                        <td className="text-start align-middle">${product.quantity * product.precio}</td>
                                        <td className="text-end align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                            </tr>
                            )}
                            <tr>
                                    <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Realizar compra</Link></td>
                                </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Cart;