import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import CarRentalSystem from "../../Assets/Projects/CarRentalSystem.png";
import Konnect from "../../Assets/Projects/Konnect.png";
import Wanderlust from "../../Assets/Projects/Wanderlust.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={Wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="Developed an online marketplace that connects homeowners with thousands of travelers, providing a convenient and cost-effective alternative to traditional hotels. Ensured data integrity and consistency through comprehensive database validation by implementing the Model-View-Controller (MVC) architecture, enhancing security and reliability. Improved user navigation and property search efficiency by engineering map encoding for precise location tracking."
              ghLink="https://github.com/DhiravAgrawal/WanderLust"
              demoLink="https://wanderlust-full-stack.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Konnect}
              isBlog={false}
              title="Konnect"
              description="Developed a full-featured video conferencing web application supporting up to 100+ concurrent users, providing all essential functionalities of modern video conferencing apps. Leveraged Node modules such as socket.io for real-time communication, cors, bcrypt, and crypto. Created a responsive, user-friendly interface using Material-UI for React."
              ghLink="https://github.com/DhiravAgrawal/Konnect"
              demoLink="https://konnectfrontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarRentalSystem}
              isBlog={false}
              title="Car Reantal System"
              description="Designed an online car rental system, allowing customers to view and book from a fleet of 100+ cars, resulting in a 30% increase in booking efficiency. Facilitated car rental operations for a company that rents cars to customers. Features: User authentication, booking management, real-time availability."
              ghLink="https://github.com/DhiravAgrawal/Car-Rental-System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Zerodha Clone"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
