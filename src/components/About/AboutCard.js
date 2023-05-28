import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="red">Hemendu Roy </span>
            from <span className="red"> Scottsdale, Arizona.</span>
            <br />I'm a Software Engineer, working at <a href="https://www.axon.com/">Axon</a>, a technology company in the public-safety sector. I save lives through code!
            <br />
            <br />
            <br />
            Aside from work, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming (Steam profile link at the bottom!)
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "All repetitive, menial computer tasks can most likely be automated or partially automated with the right code."{" "}
          </p>
          <footer className="blockquote-footer">Hemendu Roy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
