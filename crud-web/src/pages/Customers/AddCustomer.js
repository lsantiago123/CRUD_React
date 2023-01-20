import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddCustomer() {
  //const addID = useRef("");
  const addlastName = useRef("");
  const addfirstName = useRef("");
  const addmiddleName = useRef("");
  const addcompanyName = useRef("");
  const addemailAddress = useRef("");
  const addphone = useRef("");

  const navigate = useNavigate();

  function AddCustomerHandler() {
    var payload = {
      firstName: addfirstName.current.value,
      middleName: addmiddleName.current.value,
      lastName: addlastName.current.value,
      companyName: addcompanyName.current.value,
      emailAddress: addemailAddress.current.value,
      phone: addphone.current.value,
    };
    axios
      .post("https://poc-dev-api1.azurewebsites.net/api/Customers", payload) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/customers");
      });
  }

  return (
    <>
      <legend>Add a new customer</legend>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formAddCustomerID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" ref={addID} />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formAddCustomerName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={addfirstName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddCustomerMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address Line 2"
            ref={addmiddleName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddCustomerLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="City" ref={addlastName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddCustomerCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            ref={addcompanyName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddCustomerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email Address"
            ref={addemailAddress}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddCustomerPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" ref={addphone} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={AddCustomerHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddCustomer;
