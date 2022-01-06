import './App.css';
import ItemCount from './components/Counter/ItemCount';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <center>
      <Navbar />
      <ItemListContainer greeting = 'Bienvenidos a mi Ecommerce' />
      <ItemCount min = {1} max = {15} />
      <ItemDetailContainer />
    </center>
  );
}

export default App;
