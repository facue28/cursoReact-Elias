
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";


const App = () => {
  return (
      <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

/// PRUEBAS CON GITHUB