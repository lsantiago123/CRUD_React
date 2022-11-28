import React from 'react';
import {Table} from 'react-bootstrap';

class Produto extends React.Component{
    constructor(props){
        super(props);
        this.state={
            produto : []
        }
    }
    render(){
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Cor</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Bike</td>
                        <td>Vermelha</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Produto;