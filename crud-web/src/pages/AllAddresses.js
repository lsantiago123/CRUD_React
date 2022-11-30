import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function AllAddresses() {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7158/api/Addresses").then((response) => {
      setAddress(response.data);
    });
  }, []);

  return (
    <>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AllAddresses;
