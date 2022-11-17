// import React from 'react'
// import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./ReferCount.css";

const ReferCount = (props) => {
  return (
    <>
      <Container>
        <h3>Your Referral status</h3>
        <Row>
          <Col>
            <Card className="card1a">
              <Card.Body>
                <Card.Title><span>Referal Count</span> : {props.count}</Card.Title>
                <Card.Title><span>&#8377; </span> : {props.calculation}</Card.Title>
                <Card.Text>
                  Referral Entries
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2a">
              <Card.Body>
              <Card.Title><span>Referal Count</span> : {props.count}</Card.Title>
                <Card.Title><span>&#8377; </span> : {props.calculation}</Card.Title>
                <Card.Text>
                  Referral Entries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card3a">
              <Card.Body>
              <Card.Title><span>Referal Count</span> : {props.count}</Card.Title>
                <Card.Title><span>&#8377; </span> : {props.calculation}</Card.Title>
                <Card.Text>
                  Referral Entries
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
};

export default ReferCount;
