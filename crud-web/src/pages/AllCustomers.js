import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/DeleteConfirmation";
import PaginationSelector from "../components/paginationSelector";
import PaginationComponent from "../components/PaginationComponent";

function AllCustomers() {
  const [customer, setCustomer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
	const [itensPerPage, setItensPerPage] = useState(5);
	const [totalItens, setTotalItens] = useState(0);

  const fetchData = () => {
		fetch(`http://localhost:3000/itens?itensPerPage=${itensPerPage}&page=${currentPage}`, { method: "GET" })
			.then(response => response.json())
			.then(result => {
				setCustomer(result)
			})
	}

	const dataQuantity = () => {
		fetch(`http://localhost:3000/count`, { method: "GET" })
			.then(response => response.json())
			.then(result => {
				setTotalItens(result.count)
			})
	}

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

  useEffect(() => {
		setCurrentPage(0);
		fetchData();
	}, [itensPerPage]);

	useEffect(() => {
		fetchData()
	}, [currentPage])

	useEffect(() => {
		dataQuantity();
		fetchData();
	}, [])

	const pages = Math.ceil(totalItens / itensPerPage);

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
          <div className={"Row"}>
				<PaginationSelector
					itensPerPage={itensPerPage}
					setItensPerPage={setItensPerPage}
				/>
				<PaginationComponent
					pages={pages}
					currentPage={currentPage}
					itensPerPage={itensPerPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
        </tbody>
      </Table>
    </>
  );
}

export default AllCustomers;
