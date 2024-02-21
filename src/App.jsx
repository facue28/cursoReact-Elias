
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


const App = () => {
  return (
      <>
      <CartContextProvider>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element= {<ItemListContainer />}/>
              <Route path={"category/:id"} element= {<ItemListContainer />}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element= {<Cart/>} />
              <Route path={"/checkout"} element = {<Checkout/>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;

/// PRUEBAS CON GITHUB