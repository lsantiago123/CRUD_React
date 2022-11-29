import axios from 'axios';
import {useEffect, useState} from 'react';

function AllProducts(){

    const [produto, setProduto] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:").then((response) =>{ //tem que ver onde está pegando isso aqui e passar a URL
            setProduto((existingData)=>{
                return response.data;
            });
        });
    }, []);
    
    return<>
    <Row xs={1} md={3} className="g-4 mt-1">
        {produto.map((pd)=>(
            <Col key={pd.id}>
            <Card>
                <Card.Img variant="top" src={pd.imageUrl}/>
                <Card.Body>
                    <Card.Title>{pd.produtoNome}</Card.Title>
                    <Card.text>
                        <b>ID</b> {pd.id}
                    </Card.text>
                    <Card.text>
                        <b>Tipo</b> {pd.tipo}
                    </Card.text>
                    <Card.text>
                        <b>Cor</b> {pd.cor}
                    </Card.text>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    </>;
}

export default AllProducts;