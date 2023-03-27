import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";
import smarthome from "../../Assets/Projects/Smart_Home_Gesture_Recognition.png"
import brainnet from "../../Assets/Projects/BrainNet.png"
import facialrecognition from "../../Assets/Projects/Facial_Recognition.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="red">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smarthome}
              isBlog={false}
              title="Smart Home Gesture Recognition"
              description="An Android Application to record and send videos to a cloud server that employs a CNN model to recognise hand gestures and subsequently, control household appliances."
              link="https://github.com/hemenduroy/Smarthome-Gesture-Recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainnet}
              isBlog={false}
              title="BrainNet"
              description="A mobile application that acts as a verification server for liveness detection of brain signals. CSV formatted brain signal data will be sent to app over the Internet. The signal will then be analyzed using various Machine Learning models, the results of which will be voted upon. The algorithm with the highest confidence level will be reported with its results on the liveness of the signal along with relevant performance parameters."
              link="https://github.com/hemenduroy/BrainNet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facialrecognition}
              isBlog={false}
              title="Scalable Facial Recognition"
              description="This project has been fully implemented in two flavours. First, with an architecture that uses custom AWS EC2 autoscaling and second, a serverless architecture that uses AWS Lambda and Edge Computing to meet high demands."
              link="https://github.com/hemenduroy/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
