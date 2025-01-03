import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              CRAFTING <span className="purple">INNOVATIVE</span> SOLUTIONS
            </h1>
            <p className="home-about-body">
              As a Software Engineer with a unique foundation in Mechatronics, I bridge the gap between hardware and software to create robust, scalable solutions that make a real impact.
              <br /><br />
              With expertise in distributed systems and high-performance architectures, I've successfully:
              <br />
              <i>
                <b className="purple">
                  • Optimized system performance by 70% through microservices architecture
                  <br />
                  • Processed 10,000+ daily transactions with 99.9% reliability
                  <br />
                  • Reduced deployment times by 60% through containerization
                </b>
              </i>
              <br /><br />
              My technical arsenal includes mastery of
              <i>
                <b className="purple"> Python, C++, and JavaScript</b>
              </i>
              , complemented by extensive experience with
              <i>
                <b className="purple"> AWS, Docker, and modern backend frameworks</b>
              </i>
              .
              <br /><br />
              I'm particularly passionate about:
              <i>
                <b className="purple">
                  {" "}
                  • Distributed Systems Architecture
                  <br />
                  • IoT Solutions & Embedded Systems
                  <br />
                  • AI & Machine Learning Integration
                </b>
              </i>
              <br /><br />
              Currently exploring innovations in blockchain technology, specifically
              <i>
                <b className="purple"> Ethereum and Solana ecosystems</b>
              </i>
              , while continuing to architect scalable backend solutions that power next-generation applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              I'm always interested in discussing new technologies and opportunities to
              <span className="purple"> innovate together</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chukssomzzy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/chuks_somzzy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter Profile"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chukwuma-somtochukwu-065242239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
