import Home from "./components/Home";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./pages/AllProducts";
import AllAddresses from "./pages/AllAddresses";
import AllCustomers from "./pages/AllCustomers";

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/addresses">
            Addresses
          </Nav.Link>
          <Nav.Link as={Link} to="/customers">
            Customers
          </Nav.Link>
        </Nav>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/products" element={<AllProducts />}></Route>
          <Route path="/addresses" element={<AllAddresses />}></Route>
          <Route path="/customers" element={<AllCustomers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
