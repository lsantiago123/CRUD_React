import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/DeleteConfirmation";

function AllAddresses() {
  const [address, setAddress] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://poc-dev-api1.azurewebsites.net/api/Addresses")
      .then((response) => {
        setAddress(response.data);
      });
  }, []);

  function showConfirmPopupHandler(addressID) {
    setShowModal(true);
    setItemToDelete(addressID); //2:35:37
  }

  function closeConfirmPopupHandler() {
    setShowModal(false);
    setItemToDelete(0); //2:38:58
  }

  function deleteConfirmHandler() {
    axios
      .delete(
        `https://poc-dev-api1.azurewebsites.net/api/Addresses/${itemToDelete}`
      )
      .then((response) => {
        setAddress((existingdata) => {
          return existingdata.filter((_) => _.addressID !== itemToDelete);
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
            navigate("/addAddress");
          }}
        >
          Add a address
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Address Line1</th>
            <th>Address Line2</th>
            <th>State Province</th>
            <th>Country Region</th>
            <th>Postal Code</th>
          </tr>
        </thead>
        <tbody>
          {address.map((ad) => (
            <tr key={ad.addressID}>
              <th>{ad.addressID}</th>
              <th>{ad.city}</th>
              <th>{ad.addressLine1}</th>
              <th>{ad.addressLine2}</th>
              <th>{ad.stateProvince}</th>
              <th>{ad.countryRegion}</th>
              <th>{ad.postalCode}</th>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#0d6efd",
                }}
                variant="primary"
                type="button"
                onClick={() => {
                  navigate(`/updateAddress/${ad.addressID}`);
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
                  showConfirmPopupHandler(ad.addressID);
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

export default AllAddresses;
