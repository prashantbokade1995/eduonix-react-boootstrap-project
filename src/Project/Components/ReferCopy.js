import "./ReferCopy.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { InputGroup, FormControl } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";

const ReferCopy = () => {
  const [text, setText] = useState("https://www.eduonix.com/skill/web-development");
  const [textt, setTextt] = useState("kjm345");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const onCopyTextt = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <Container>
        <h4>Share with your friends</h4>
        <Form>
          <Row>
            <Col>
            <InputGroup className="container-fluid mt-1">
            <label><h6>Referal link  : </h6></label>
                <FormControl type="text" value={text} onChange={(event) => setText(event.target.value)}
                  placeholder="Program url"
                  aria-label="Search Text"
                  aria-describedby="basic-addon2" id="textenter"
                />
                <InputGroup.Text>
                <CopyToClipboard text={text} onCopy={onCopyText}>
                <div className="copy-area">
                  <span>
                  <button><MdContentCopy /></button>
                  </span><span className={`copy-feedback ${isCopied ? "active" : "Copied!"}`}></span>
                  </div>
                  </CopyToClipboard>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="container-fluid mt-1">
            <label><h6>Referal code : </h6></label>

                <FormControl type="text" value={textt} onChange={(event) => setTextt(event.target.value)}
                  placeholder="Referal Code"
                  aria-label="Search Text"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text>
                <CopyToClipboard text={textt} onCopy={onCopyTextt}>
                <div className="copy-area">
                  <span>
                  <button><MdContentCopy /></button>
                  </span><span className={`copy-feedback ${isCopied ? "active" : "Copied!"}`}></span>
                  </div>
                  </CopyToClipboard>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <div>
                <span>
                  <b>Share via social:</b>
                </span>
                <span href="#" className="m-2">
                  <BsFacebook />
                </span>
                <span href="#" className="m-2">
                  <AiFillTwitterCircle />
                </span>
                <span href="#" className="m-2">
                  <AiFillYoutube />
                </span>
                <span href="#" className="m-2">
                  <BsInstagram />
                </span>
                <span href="#" className="m-2">
                  <BsLinkedin />
                </span>
              </div>
            </Col>
          </Row>
        </Form>
      
      </Container>
    </>
  );
};

export default ReferCopy;







