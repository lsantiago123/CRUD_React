import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddAddress() {
  //const addID = useRef("");
  const addAL1 = useRef("");
  const addAL2 = useRef("");
  const addCity = useRef("");
  const addStateP = useRef("");
  const addCountryR = useRef("");
  const addPostalC = useRef("");

  const navigate = useNavigate();

  function AddAddressHandler() {
    var payload = {
      //aqui tem que passar do jeito que tá na tabela (1:33:33), e é sem as aspas(1:35:12)
      //addressID: Math.random(),
      addressLine1: addAL1.current.value,
      addressLine2: addAL2.current.value,
      city: addCity.current.value,
      stateProvince: addStateP.current.value,
      countryRegion: addCountryR.current.value,
      postalCode: addPostalC.current.value,
    };
    axios
      .post("https://poc-dev-api1.azurewebsites.net/api/Addresses", payload) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/addresses");
      });
  }

  return (
    <>
      <legend>Add a new address</legend>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formAddAddressID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" ref={addID} />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formAddAddressAddressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control type="text" placeholder="Address Line 1" ref={addAL1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressAddressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control type="text" placeholder="Address Line 2" ref={addAL2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" ref={addCity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressStateProvince">
          <Form.Label>State Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="State Province"
            ref={addStateP}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressCountryRegion">
          <Form.Label>Country Region</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country Region"
            ref={addCountryR}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Postal Code"
            ref={addPostalC}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={AddAddressHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddAddress;
