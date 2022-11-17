import React from "react";
import { Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import './Footer.css'
import Col from "react-bootstrap/Col";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer  className="container-fluid"  id="footer">
      <div>
        <Row>
          <Col>
            <div className="logoimg">
              <img
                alt="Eduonix"
                src="https://media-exp1.licdn.com/dms/image/C511BAQE1NaQLmyGLlw/company-background_10000/0/1560411660501?e=2147483647&v=beta&t=VPlj9xmyaLwmdgMvEH746x_HkoIVdCU6dC1WLTLUIiM"
                height="40"
                className="d-inline-block align-top"
              />{" "}
            </div>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h6>PAGES</h6>
              </li>
              <li href="#">Courses</li>
              <li href="#">Freebies</li>
              <li href="#">E-Degrees</li>
              <li href="#">Paths</li>
              <li href="#">Deals</li>
            </ul>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h6>ABOUT</h6>
              </li>
              <li href="#">About Us</li>
              <li href="#">Contact Us</li>
              <li href="#">Terms & Conditions</li>
              <li href="#">Infiniti T&C</li>
              <li href="#">Instructors policy</li>
              <li href="#">Privacy policy</li>
              <li href="#">FAQ</li>
              <li href="#">Sitemap</li>
            </ul>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h6>HELPFUL LINKS</h6>
              </li>
              <li href="#">Gift Voucher</li>
              <li href="#">Our Webblog</li>
              <li href="#"> Affiliates</li>
              <li href="#">Teach For Us</li>
              <li href="#">Opportunities</li>
              <li href="#">Corporate Training</li>
            </ul>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h5>JOIN US</h5>
              </li>
              <div>
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
            </ul>

            <ul type="none">
              <li>
                <h6>DOWNLOAD OUR APP</h6>
                <li><img src="https://freepngimg.com/download/temp_png/67007-app-play-google-android-store-hq-image-free-png.jpeg" alt="" height="50" className="d-inline-block align-top m-2" /></li>
                <li><img src="https://sticker-maker.com/images/apple_store.png" alt="" height="50" className="d-inline-block align-top m-2"/></li>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="container-fluid text-center" id="bfooter">
          <span>&#169;</span>2022 Eduonix Learning Solutions Pvt Ltd. All Rights
          Reserved.
      </div>
      </footer>
    </>
  );
};

export default Footer;
