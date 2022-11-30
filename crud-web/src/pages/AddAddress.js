import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddAddress() {
    const addID = useRef("");
    const addCity = useRef("");
    const addAL1 = useRef("");
    const addAL2 = useRef("");
    const addStateP = useRef("");
    const addCountryR = useRef("");

    const navigate = useNavigate();

    function AddAddressHandler() {

        var payload = {        //aqui tem que passar do jeito que tá na tabela (1:33:33), e é sem as aspas(1:35:12)
            "": addID.current.value,
            "": addCity.current.value,
            "": addAL1.current.value,
            "": addAL2.current.value,
            "": addStateP.current.value,
            "": addCountryR.current.value,
        }
        axios
            .post("", payload) //tem q colocar o link aqui(1:33:00)
            .then((response) => {
                navigate("/");
            })
    };

    return (<>
        <legend>Add a new address</legend>
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
            <Button variant="primary" type="submit" onClick={AddAddressHandler}>
                Submit
            </Button>
        </Form>
    </>
    );
};

export default AddAddress;