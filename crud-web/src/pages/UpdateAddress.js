import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateAddress() {
  const addID = useRef("");
  const addCity = useRef("");
  const addAL1 = useRef("");
  const addAL2 = useRef("");
  const addStateP = useRef("");
  const addCountryR = useRef("");
  const addPostalC = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://localhost:7158/api/Addresses/${id}`) //mesmo link do axios do AddAddress 2:04:42
      .then((response) => {
        //tem que pegar como está na tabela, 2:06:00 // 2:07:55
        //addID.current.value = response.data.addressID;
        addAL1.current.value = response.data.addressLine1;
        addAL2.current.value = response.data.addressLine2;
        addCity.current.value = response.data.city;
        addStateP.current.value = response.data.stateProvince;
        addCountryR.current.value = response.data.countryRegion;
        addPostalC.current.value = response.data.postalCode;
        //id: id;
      });
  }, []);

  function UpdateAddressHandler() {
    var payload = {
      //aqui tem que passar do jeito que tá na tabela (1:33:33), e é sem as aspas(1:35:12)
      //addressID: addID.current.value,
      addressLine1: addAL1.current.value,
      addressLine2: addAL2.current.value,
      city: addCity.current.value,
      stateProvince: addStateP.current.value,
      countryRegion: addCountryR.current.value,
      postalCode: addPostalC.current.value,
      id: id,
    };
    axios
      .put("https://localhost:7158/api/Addresses", payload) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/addresses");
      });
  }
  return (
    <>
      <legend>Update the address</legend>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formAddAddressID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" ref={addID} />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formAddAddressCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" ref={addCity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressAddressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control type="text" placeholder="Address Line 1" ref={addAL1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddAddressAddressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control type="text" placeholder="Address Line 2" ref={addAL2} />
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
        <Button variant="primary" type="button" onClick={UpdateAddressHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateAddress;
