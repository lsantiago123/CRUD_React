import Home from "./components/Home";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./pages/AllProducts";
import AllAddresses from "./pages/AllAddresses";
import AllCustomers from "./pages/AllCustomers";
import AddAddress from "./pages/AddAddress";
import UpdateAddress from "./pages/UpdateAddress";
import UpdateCustomer from "./pages/UpdateCostumer";
import UpdateProduct from "./pages/UpdateProduct";
import AddCustomer from "./pages/AddCustomer";
import AddProduct from "./pages/AddProduct";
import Button from "react-bootstrap/Button";

import { AzureAD, AuthenticationState } from "react-aad-msal";
import { authProvider } from "./authProvider";

function App() {
  return (
    <div className="App">
      <AzureAD provider={authProvider} forceLogin={false}>
        {({ login, logout, authenticationState, error, accountInfo }) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              return (
                <p>
                  <span>
                    Welcome, {accountInfo.account.userName}!<br></br>
                  </span>
                  <Button onClick={logout}>Logout</Button>
                  <h1>CRUD</h1>
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
                  <Routes>
                    <Route
                      path="/addAddress"
                      element={<AddAddress></AddAddress>}
                    ></Route>
                  </Routes>
                  <Routes>
                    <Route
                      path="/addCustomer"
                      element={<AddCustomer></AddCustomer>}
                    ></Route>
                  </Routes>
                  <Routes>
                    <Route
                      path="/addProduct"
                      element={<AddProduct></AddProduct>}
                    ></Route>
                  </Routes>
                  <Routes>
                    <Route
                      path="/updateAddress/:id"
                      element={<UpdateAddress></UpdateAddress>}
                    ></Route>
                  </Routes>
                  <Routes>
                    <Route
                      path="/updateCustomer/:id"
                      element={<UpdateCustomer></UpdateCustomer>}
                    ></Route>
                  </Routes>
                  <Routes>
                    <Route
                      path="/updateProduct/:id"
                      element={<UpdateProduct></UpdateProduct>}
                    ></Route>
                  </Routes>
                </p>
              );
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                  {error && (
                    <p>
                      <span>
                        An error occured during authentication, please try
                        again!
                      </span>
                    </p>
                  )}
                  <p>
                    <span>Hey stranger, you look new!</span>
                    <button onClick={login}>Login</button>
                  </p>
                </div>
              );
            case AuthenticationState.InProgress:
              return <p>Authenticating...</p>;
          }
        }}
      </AzureAD>
    </div>
  );
}

export default App;
