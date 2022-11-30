import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function AllCustomers() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7158/api/Customers").then((response) => {
      setCustomer(response.data);
    });
  }, []);

  return (
    <>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AllCustomers;
