import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateProduct() {
  const addCOLOR = useRef("");
  const addNAME = useRef("");
  const addPRICE = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://poc-dev-api1.azurewebsites.net/api/Products/${id}`)
      .then((response) => {
        addNAME.current.value = response.data.name;
        addPRICE.current.value = response.data.listPrice;
        addCOLOR.current.value = response.data.color;
      });
  }, []);

  function UpdateProductHandler() {
    var payload = {
      name: addNAME.current.value,
      listprice: addPRICE.current.value,
      color: addCOLOR.current.value,
      productID: id,
    };
    axios
      .put("https://poc-dev-api1.azurewebsites.net/api/Products/${id}", payload) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/Products");
      });
  }
  return (
    <>
      <legend>Update the Product</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formAddProductName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={addNAME} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddProductProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" ref={addPRICE} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddProductColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Color" ref={addCOLOR} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={UpdateProductHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateProduct;
