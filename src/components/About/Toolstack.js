import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiStackoverflow,
  SiSlack,
  SiVercel,
  SiFujitsu,
  // SiTopcoder, SiToptal, SiStopstalk, SiStrapi,
  // SiStackblitz, SiStackedit, SiStackexchange,
  // SiSqlite,SiSpring, SiSpringCreators, SiSpringboot, SiSpringsecurity,
  // SiWindows, SiScikitlearn, SiOverleaf, SiOpensourceinitiative, SiMicrosoftoffice, SiMicrosoft, SiMedium,
  // SiMarkdown, SiLeetcode, SiJupyter, SiIntellijidea, SiHackerrank, SiGoogle, SiGithub, SiGeeksforgeeks, SiCoursera,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFujitsu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
