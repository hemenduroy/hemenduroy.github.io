import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSteam } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="red"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer at Axon Enterprise with 3+ years of experience in Software Development, Object-oriented Programming and microservices deployed in the cloud.
              <br />
              <br />I am proficient in programming languages including
              <i>
                <b className="red"> Java, Python, C++, JavaScript</b>
              </i>
              , and SQL dialects including
              <i>
                <b className="red"> SQL Server, Oracle PL/SQL, PostgreSQL, and MySQL</b>.
              </i>
              <br />
              <br />
              I enjoy building new&nbsp;
              <i>
                <b className="red">applications </b> that
                combine seemingly unrelated usecases to generate novel{" "}
                <b className="red">
                  insights.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="red"> modern technologies</b>
              </i>
              &nbsp; like
              <i>
                <b className="red"> Python </b>
              </i>
              and as of late, the <b className="red"> ChatGPT API.</b>

            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hemenduroy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hemendu-roy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://steamcommunity.com/id/Th3A/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSteam />
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
