import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {

        if (isInCart(item.id)){
            let pos = cart.findIndex(product.id === id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart,{...item, quantity:quantity}]);
        }
    }


    const removeItem = (id) => {
        const products = cart.filter(product => product.id != id);
        setCart([...products])
    }


    const clear = () => {
        setCart([]);
    }


    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }


    const CantTotalProductos = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0);
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acc, product) => acc += product.quantity * product.precio, 0);
    }


    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider