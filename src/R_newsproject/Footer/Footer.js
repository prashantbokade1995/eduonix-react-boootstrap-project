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
import { NavLink } from "react-bootstrap";



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
                src="https://w7.pngwing.com/pngs/776/349/png-transparent-television-channel-captain-news-tamil-sun-tv-news-miscellaneous-television-trademark.png"
                width='150'
                className="d-inline-block align-top"
              />{" "}
            </div>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h6>NEWS</h6>
              </li>
              <li ><NavLink href="/TopStory">TopStory</NavLink></li>
              <li><NavLink href="/NewStory">NewStory</NavLink></li>
              <li><NavLink href="/BestTopStory">BestTopStory</NavLink></li>
              
            </ul>
          </Col>
          <Col>
            <ul type="none">
              <li>
                <h6>PAGES</h6>
              </li>
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
              <li href="#">About Us</li>
              <li href="#">Contact Us</li>
              <li href="#">Terms & Conditions</li>
              <li href="#">Infiniti T&C</li>
              <li href="#">Gift Voucher</li>
              <li href="#">Our Webblog</li>
              
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
                <li><img src="https://sticker-maker.com/images/apple_store.png" alt="" height="50" className="d-inline-block align-top m-2"/></li>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="container-fluid text-center" id="bfooter">
          <span>&#169;</span>All INDIA NEWS AND INTERNATIONAL NEWS CHANNEL
      </div>
      </footer>
    </>
  );
};

export default Footer;
