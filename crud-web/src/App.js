import Home from './components/Home';
import Produto from './components/Produto';
import Sobre from './components/Sobre';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Switch} from 'react-router';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
          <Nav.Link as={Link} to="/produtos">Cadastro de Produtos</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        </Nav>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/produtos" element={<Produto />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;