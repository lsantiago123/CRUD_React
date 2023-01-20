import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateCustomer() {
  const addlastName = useRef("");
  const addfirstName = useRef("");
  const addmiddleName = useRef("");
  const addcompanyName = useRef("");
  const addemailAddress = useRef("");
  const addphone = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://poc-dev-api1.azurewebsites.net/api/Customers/${id}`)
      .then((response) => {
        addfirstName.current.value = response.data.firstName;
        addmiddleName.current.value = response.data.middleName;
        addlastName.current.value = response.data.lastName;
        addcompanyName.current.value = response.data.companyName;
        addemailAddress.current.value = response.data.emailAddress;
        addphone.current.value = response.data.phone;
      });
  }, []);

  function UpdateCustomerHandler() {
    var payload = {
      firstName: addfirstName.current.value,
      middleName: addmiddleName.current.value,
      lastName: addlastName.current.value,
      companyName: addcompanyName.current.value,
      emailAddress: addemailAddress.current.value,
      phone: addphone.current.value,
      customerID: id,
    };
    axios
      .put(
        "https://poc-dev-api1.azurewebsites.net/api/Customers/${id}",
        payload
      ) //tem q colocar o link aqui(1:33:00)
      .then((response) => {
        navigate("/Customers");
      });
  }
  return (
    <>
      <legend>Update the Customer</legend>
      <Form>
        <Form.Group classfirstName="mb-3" controlId="formAddCustomerfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="firstName"
            ref={addfirstName}
          />
        </Form.Group>
        <Form.Group
          classfirstName="mb-3"
          controlId="formAddCustomerCustomerPrice"
        >
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Middle Name"
            ref={addmiddleName}
          />
        </Form.Group>
        <Form.Group classfirstName="mb-3" controlId="formAddCustomerlastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" ref={addlastName} />
        </Form.Group>
        <Form.Group
          classfirstName="mb-3"
          controlId="formAddCustomerCompanyName"
        >
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            ref={addcompanyName}
          />
        </Form.Group>
        <Form.Group classfirstName="mb-3" controlId="formAddCustomerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            ref={addemailAddress}
          />
        </Form.Group>
        <Form.Group classfirstName="mb-3" controlId="formAddCustomerPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" ref={addphone} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={UpdateCustomerHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateCustomer;
