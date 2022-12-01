import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function AllAddresses() {
  const [address, setAddress] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:7158/api/Addresses").then((response) => {
      setAddress(response.data);
    });
  }, []);

  return (
    <>
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
                type="submit"
                onClick={() => {
                  navigate(`/updateAddress/${ad.addressID}`);
                }}
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
