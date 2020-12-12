import './App.css';
import ShoesComponent from './StockComponent/ShoesComponent';
import JacketComponent from './StockComponent/JacketComponent';
import PantComponent from './StockComponent/PantComponent';
import SuitComponent from './StockComponent/SuitComponent';

function App() {
  return (
    <div className="App">
      <h1>Stock Components</h1>
      < ShoesComponent />
      < JacketComponent />
      < PantComponent />
      < SuitComponent />
    </div>
  );
}

export default App;
