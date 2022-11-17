import React, { useState, useEffect } from "react";
import "./ReferCard.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import FormComp from './FormComp';
import Footer from './Footer';
import ReferCopy from './ReferCopy';
import ReferCount from './ReferCount';
import DropDownForm from './DropDownForm';




const ReferCard = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 250);
  }, [count]); // <- add the count variable here

  return (
    <>
      <Container>
        <Card className="referCard">
          <Card.Body>
            <Card.Title>Refer & Earn</Card.Title>
            <Card.Text>
              Refer upskilling content to Your friends and family to earn cash
              for each registration.
            </Card.Text>
            <span className="d-md-flex justify-content-md-end">
              <Button
                variant="danger"
                className="referbtn"
                onClick={() => setCount((c) => c + 1)}
              >
                My Referrals
              </Button>
            </span>
          </Card.Body>
        </Card>
      </Container>

      <div className="hrconatiner">
        <hr className="hrtext" data-content="Our Program to Refer & Earn" />
      </div>

      <Container>
        <Row>
          <Col>
            <Card className="card1">
              <Card.Body>
                <Card.Text>
                  Certification Program in FullStack Development
                </Card.Text>
                <Card.Title>Earn ₹ 250 per invite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2">
              <Card.Body>
                <Card.Text>
                  Certification Skill Developmenet Program in Buisiness Strategy
                </Card.Text>
                <Card.Title>Earn ₹ 300 per invite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card3">
              <Card.Body>
                <Card.Text>
                  Certification Skill Developmenet Program in Digital Marketing
                </Card.Text>
                <Card.Title>Earn ₹ 350 per invite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <DropDownForm/>
      <ReferCopy/>
      <FormComp />
      <ReferCount count = {count} calculation = {calculation}/>
      <Footer/>
    </>
  );
};

export default ReferCard;
