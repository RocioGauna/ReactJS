import './App.css';
import ItemCount from './components/Counter/ItemCount';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <center>
      <Navbar />
      <ItemListContainer greeting = 'Bienvenidos a mi Ecommerce' />
      <ItemCount min = {1} max = {15} />
    </center>
  );
}

export default App;
