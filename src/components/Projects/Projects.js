import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/crypto.png";
import firebase from "../../Assets/Projects/firebase.png";
import cancer from "../../Assets/Projects/cancer.png";
import shree from "../../Assets/Projects/shree.png";
import youtube from "../../Assets/Projects/youtube.png";
import visualizer from "../../Assets/Projects/visualizer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shree}
              isBlog={false}
              title="Shree - A Personal Virtual Assistant"
              description="A Personal Virtual Assistant which helps you to work hassle-freely and provides each and every detail about your queries. It responds to your online searches on topics, helps you send e-mail,responds back with the current time and is different from a common chatbot."
              ghLink="https://github.com/shreyarora12/shree"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualizer}
              isBlog={false}
              title="Java Graph Algorithms Visualizer"
              description="Shows graphical depiction of specified algorithms & gives step-by-step execution.Inspired by a thesis on Visualization of Sorting Algorithms, this project majorly aims at the visualization of the most known 
              data structures and algorithms to develop a learning aid platform."
              ghLink="https://github.com/shreyarora12/Java-Graph-Algorithms-Visualizer"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Breast Cancer Detection using Machine Learning"
              description="Best ML algorithms are performed to know and analyse about Breast Cancer Detection by employing a classification
              machine learning algorithm which includes exploratory data analysis on the data and the creation of a data model."
              ghLink="https://github.com/shreyarora12/Breast-Cancer-Detection"
              // demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptography App using Python"
              description="Developing a cryptography app in python to encrypt and decrypt a user input normal text message when the key is provided."
              ghLink="https://github.com/shreyarora12/Project---Cryptography_App"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube Downloader"
              description="A Python program to open a GUI window where we can put a youtube video link and click the download button to download it into the required folder."
              ghLink="https://github.com/shreyarora12/Project-YouTube-Downloader"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firebase}
              isBlog={false}
              title="Firebase Database"
              description="Create Read Update Delete(CRUD) to a real-time Database server like Firebase."
              ghLink="https://github.com/shreyarora12/Project-Firebase"
              // demoLink="#"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
