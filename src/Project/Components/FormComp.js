import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import { VscAdd } from "react-icons/vsc";
import { TiMinus } from "react-icons/ti";
import { View } from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("inputData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const FormComp = () => {
  // main array of objects state || inputData state || inputData array of objects
  const [inputData, setInputData] = useState(getDatafromLS());

  // input field states
  const [firstName, setFirstName] = useState("");
  const [lastaName, setLastaName] = useState("");
  const [phone, setPhone] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let Storedata = {
      firstName,
      lastaName,
      phone,
    };
    setInputData([...inputData, Storedata]);
    setFirstName("");
    setLastaName("");
    setPhone("");
  };

  // delete Storedata from LS
  const deletedata = (phone) => {
    const filteredBooks = inputData.filter((element, index) => {
      return element.phone !== phone;
    });
    setInputData(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("inputData", JSON.stringify(inputData));
  }, [inputData]);

  return (
    <>
      <br />

      <div className="hrconatiner">
        <hr className="hrtext" data-content="OR" />
      </div>
      <Container>
        <p>
          Kindley submit the candidate's information you are referring. Get them
          to register with this information.
        </p>

        <Form onSubmit={handleAddBookSubmit}>
          <Row>
            <Col xs={4}>
              <Form.Control
                placeholder="Fullname"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Col>
            <Col xs={4}>
              <Form.Control
                placeholder="Email"
                onChange={(e) => setLastaName(e.target.value)}
                value={lastaName}
              />
            </Col>
            <Col xs={3}>
              <InputGroup className="container-fluid">
                <FormControl
                  placeholder="Phone number"
                  aria-label="Search Text"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <Button type="submit">
                  <VscAdd />
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end m-3">
            <Button variant="warning" type="submit">
              Submit
            </Button>{" "}
          </div>
        </Form>

        <div className="view-container">
          {inputData.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                    <th>phone</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  <View inputData={inputData} deletedata={deletedata} />
                  </tbody>
                </table>
              </div>
              <Button
                className="btn btn-danger btn-md"
                onClick={() => setInputData([])}
              >
                <TiMinus />
              </Button>
            </>
          )}
          {inputData.length < 1 && <div>Fill Your Details</div>}
        </div>
      </Container>
      <br />
    </>
  );
};

export default FormComp;
