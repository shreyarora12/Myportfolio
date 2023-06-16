import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Arora </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I have worked with some well established companies contributing to their growth as Software Engineer Intern.
            <br />
            I love working in collaborative environment and where I can bring out my creativity as a representative.
            <br />
            <br />
            Here are a few of the other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Team Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shreya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
