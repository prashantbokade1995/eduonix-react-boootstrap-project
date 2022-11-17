// import React, {useState} from 'react'
import React, { Component } from "react";
// import { FormSelect } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./DropDownForm.css";

class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.setValue(e.target.value);
  }
  render(props) {
    const options = this.props.options.map((elem) => (
      <option value={elem.value}>{elem.label}</option>
    ));

    return (
      <Container>
        <Row>
          <Col>
            <b>Select a Program to refer:</b>
            <div className="Selectme">
              <select
                value={this.props.value}
                onChange={this.handleChange}
                className="form-select"
                aria-label="Floating label select example"
              >
                {options}
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

class DropDownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Select Certification Program",
      lable: "Certification Program",
    };
    this.options = [
      {
        value: "",
        label: "Select Certification Program",
      },
      {
        value: "Certification Program in FullStack Development",
        label: "Certification Program in FullStack Development",
      },
      {
        value: "Certification Skill Developmenet Program in Buisiness Strategy",
        label: "Certification Skill Developmenet Program in Buisiness Strategy",
      },
      {
        value: "Certification Skill Developmenet Program in Digital Marketing",
        label: "Certification Skill Developmenet Program in Digital Marketing",
      },
    ];
    for (let i = 0; i <= 1; i++) this.options.push(i);
    this.setValue = this.setValue.bind(this);
  }
  setValue(value) {
    this.setState({ value });
  }

  render() {
    return (
      <>
        <Container>
          <FormSelect
            className="Selectme"
            options={this.options}
            setValue={this.setValue}
          />
          <br />
          
          <h6>You select : {this.state.value}</h6>
        </Container>
        <br />
      </>
    );
  }
}

export default DropDownForm;
