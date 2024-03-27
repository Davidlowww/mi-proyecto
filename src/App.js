import logo from "./logo.svg";
import "./App.css";
import Componente1 from "./components/Componente1";
import { Componente2 } from "./components/Componente2";
import Propietarios from "./components/Propietarios";
import Item from "./Item";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome users</p>

        
        <Componente1 />
        <hr />
        <Componente2 />
        <Propietarios />
        <Item />
      </header>
    </div>
  );
}

export default App;
