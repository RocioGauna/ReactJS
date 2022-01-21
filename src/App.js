import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = '/' element = { <ItemListContainer /> } />
          <Route exact path = '/category/:categoryId' element = { <ItemListContainer />} />
          <Route exact path = '/description/:descriptionId' element = { <ItemDetailContainer />} />
          <Route exact path = '/cart' element = { <Cart /> } />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
