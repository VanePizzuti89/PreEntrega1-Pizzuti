import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { CartProvider} from './context/CartContext'
import Cart from './components/Cart/Cart'




const App = () => {
  return  (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer gretting={'Nuestro catálogo'}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer gretting={'Productos por categoria'}/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App;

