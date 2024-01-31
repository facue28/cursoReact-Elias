
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";


const App = () => {
  return (
      <>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element= {<ItemListContainer />}/>
            <Route path="category/:id" element= {<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

/// PRUEBAS CON GITHUB