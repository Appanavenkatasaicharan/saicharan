import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Appana Venkata Sai Charan </span>
            from <span className="purple"> Bhimavaram,Andhra Pradesh .</span>
            <br />
            I am currently pursuing my BTech degree and I am expected to graduate in <span className="purple">Computer Science and Engineering</span> branch by 2025.
            <br />
            I have made several full stack applications and I am interested in <span className="purple"> Blockchain </span> and <span className="purple">GenAI</span>.
            <br />
            I like solving challenges in an optimal way. That's why I like to solve <span className="purple"> DSA </span> questions.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Tech.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">Sai Charan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
