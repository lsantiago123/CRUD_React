import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function AllProducts() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7158/api/Products").then((response) => {
      setProduct(response.data);
    });
  }, []);

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
