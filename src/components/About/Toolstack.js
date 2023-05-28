import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiAzuredevops,
  SiGithub,
  SiKubernetes,
  SiApacheairflow,
  SiDatadog,
  SiGrafana
} from "react-icons/si";
import {
    DiAtlassian,
    DiAws,
    DiDatabase,
    DiDocker,
    DiGit,
    DiMysql,
    DiPostgresql,
    DiStackoverflow,
    DiTerminal,
    DiUbuntu,
    DiVisualstudio,
    DiWindows,
    DiGoogleCloudPlatform
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAtlassian />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAzuredevops />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGoogleCloudPlatform />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApacheairflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDatadog />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGrafana />
        </Col>
    </Row>
  );
}

export default Toolstack;
