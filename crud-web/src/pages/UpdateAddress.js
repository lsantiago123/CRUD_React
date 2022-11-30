import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateAddress() {

    const addID = useRef("");
    const addCity = useRef("");
    const addAL1 = useRef("");
    const addAL2 = useRef("");
    const addStateP = useRef("");
    const addCountryR = useRef("");

    const { id } = useParams();

    useEffect(() => {

        axios.get(`/${id}`)                         //mesmo link do axios do AddAddress 2:04:42
        .then((response) => {                     //tem que pegar como está na tabela, 2:06:00 // 2:07:55
            addID.current.value = response.data ; 
            addCity.current.value = response.data ;
            addAL1.current.value = response.data ;
            addAL2.current.value = response.data ;
            addStateP.current.value = response.data ;
            addCountryR.current.value = response.data ;
        })
    }, [])

    function UpdateAddressHandler() { }
    return (<>
        <legend>Update the address</legend>
        <Form>
            <Form.Group className="mb-3" controlId="formAddAddressID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="ID" ref={addID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAddressCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" ref={addCity} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAddressAddressLine1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="Address Line 1" ref={addAL1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAddressAddressLine2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="Address Line 2" ref={addAL2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAddressStateProvince">
                <Form.Label>State Province</Form.Label>
                <Form.Control type="text" placeholder="State Province" ref={addStateP} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddAddressCountryRegion">
                <Form.Label>Country Region</Form.Label>
                <Form.Control type="text" placeholder="Country Region" ref={addCountryR} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={UpdateAddressHandler}>
                Submit
            </Button>
        </Form>
    </>
    );
}

export default UpdateAddress;