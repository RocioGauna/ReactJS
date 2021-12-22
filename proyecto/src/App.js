import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  const saludar = 'Hola'

  return (
    <center>
      <Navbar />
      <ItemListContainer greeting = {saludar} />
    </center>
  );
}

export default App;
