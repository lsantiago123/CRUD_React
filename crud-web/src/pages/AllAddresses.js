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
    axios.get("https://localhost:7158/api/Addresses").then((response) => {
      setAddress(response.data);
    });
  }, []);

  function showConfirmPopupHandler(id){ //ele colocou id aqui mas não tenho certeza se é certo, 2:34:26
    setShowModal(true);
    setItemToDelete(id); //2:35:37
  }

  function closeConfirmPopupHandler(){
    setShowModal(false);
    setItemToDelete(0); //2:38:58
  }

  function deleteConfirmHandler(){
    axios.delete(`https://localhost:7158/api/Addresses/${itemToDelete}`)
    .then((response)=>{
      setAddress((existingdata)=>{        //vou fazer q nem o dele, mas vai dar errado eu acho 2:37:51
        return existingdata.filter(_ => _.id !== itemToDelete)
      })
      setItemToDelete(0);
      setShowModal(false);
    });
  }

  return (
    <>
    <DeleteConfirmation
    showModal={showModal}
    title = "Delete Confirmation!"
    body = "Are sure to delete the item?"
    closeConfirmPopupHandler = {closeConfirmPopupHandler}
    deleteConfirmHandler = {deleteConfirmHandler}
    >

    </DeleteConfirmation>
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
              <Button
                style={{
                  color: "black",
                }}
                variant="primary"
                type="button"
                onClick={() => {
                  navigate(`/updateAddress/${ad.addressID}`);
                }}
              >
                Edit
              </Button>
              <Button
                style={{
                  color: "black",
                }}
                variant="danger"
                type="button"
                onClick={()=>{showConfirmPopupHandler(ad.id); }} //tbm não tenho certeza se está certo 2:35:17
              >
                Edit
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AllAddresses;
