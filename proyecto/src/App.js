import './App.css';
import ItemCount from './components/Contador/ItemCount';
import Navbar from './components/Navbar/Navbar';


function App() {
  const greeting = 'Feliz comienzo de año'

  return (
    <center>
      <Navbar />
      <ItemCount min = {1} max = {15} />
    </center>
  );
}

export default App;
