import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chukwuma Emmanuel </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am Software Engineer.
            <br />
            I have completed Bachelor Degree (BEng) in Mechatronic Engineering at FUTO
            Nigeria.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Combat Sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe unless work is put in energy can't be gotten!"{" "}
          </p>
          <footer className="blockquote-footer">Chukwuma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
