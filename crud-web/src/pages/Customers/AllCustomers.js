import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../../components/DeleteConfirmation";

function AllCustomers() {
  const [customer, setCustomer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://poc-dev-api1.azurewebsites.net/api/Customers")
      .then((response) => {
        setCustomer(response.data);
      });
  }, []);

  function showConfirmPopupHandler(customerID) {
    setShowModal(true);
    setItemToDelete(customerID); //2:35:37
  }

  function closeConfirmPopupHandler() {
    setShowModal(false);
    setItemToDelete(0); //2:38:58
  }

  function deleteConfirmHandler() {
    axios
      .delete(
        `https://poc-dev-api1.azurewebsites.net/api/Customers/${itemToDelete}`
      )
      .then((response) => {
        setCustomer((existingdata) => {
          return existingdata.filter((_) => _.customerID !== itemToDelete);
        });
        setItemToDelete(0);
        setShowModal(false);
      });
  }

  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation!"
        body="Are you sure you want to delete this item?"
        closeConfirmPopupHandler={closeConfirmPopupHandler}
        deleteConfirmHandler={deleteConfirmHandler}
      ></DeleteConfirmation>
      <div style={{ float: "right" }}>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            navigate("/addCustomer");
          }}
        >
          Add a customer
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((ct) => (
            <tr key={ct.customerID}>
              <th>{ct.customerID}</th>
              <th>{ct.firstName}</th>
              <th>{ct.middleName}</th>
              <th>{ct.lastName}</th>
              <th>{ct.companyName}</th>
              <th>{ct.emailAddress}</th>
              <th>{ct.phone}</th>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#0d6efd",
                }}
                variant="primary"
                type="button"
                onClick={() => {
                  navigate(`/updateCustomer/${ct.customerID}`);
                }}
              >
                Edit
              </Button>
              <th></th>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "red",
                }}
                variant="danger"
                type="button"
                onClick={() => {
                  showConfirmPopupHandler(ct.customerID);
                }}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AllCustomers;
