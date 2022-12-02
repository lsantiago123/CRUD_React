import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/DeleteConfirmation";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:7158/api/Products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  function showConfirmPopupHandler(productID) {
    setShowModal(true);
    setItemToDelete(productID); //2:35:37
  }

  function closeConfirmPopupHandler() {
    setShowModal(false);
    setItemToDelete(0); //2:38:58
  }

  function deleteConfirmHandler() {
    axios
      .delete(`https://localhost:7158/api/Products/${itemToDelete}`)
      .then((response) => {
        setProduct((existingdata) => {
          return existingdata.filter((_) => _.productID !== itemToDelete);
        });
        setItemToDelete(0);
        setShowModal(false);
      });
  }
  return (
    <>
      <Row xs={1} md={3} className="g-4 mt-1">
        {product.map((pd) => (
          <Col key={pd.productID}>
            <Card>
              <Card.Body>
                <Card.Title>{pd.name}</Card.Title>
                <Card.Text>
                  <b>ID:</b> {pd.productID}
                </Card.Text>
                <Card.Text>
                  <b>Price:</b> {pd.listPrice}
                </Card.Text>
                <Card.Text>
                  <b>Color:</b> {pd.color}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllProducts;
