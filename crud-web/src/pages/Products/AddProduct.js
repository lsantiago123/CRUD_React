import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddProduct() {
  const addCOLOR = useRef("");
  const addNAME = useRef("");
  const addPRICE = useRef("");

  const navigate = useNavigate();

  function AddProductHandler() {
    var payload = {
      name: addNAME.current.value,
      listprice: addPRICE.current.value,
      color: addCOLOR.current.value,
    };
    axios
      .post("https://poc-dev-api1.azurewebsites.net/api/Products", payload) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/products");
      });
  }

  return (
    <>
      <legend>Add a new product</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formAddProductName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={addNAME} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" ref={addPRICE} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddProductColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Color" ref={addCOLOR} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={AddProductHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
