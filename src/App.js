import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer";
import ItemCount from "./components/ItemCount/ItemCount"
import { BrowserRouter } from "react-router-dom";




const App = () => {
  return  (
    <BrowserRouter>

    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
    <Footer/>



    </BrowserRouter>

  )

}

export default App;

