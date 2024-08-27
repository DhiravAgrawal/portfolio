import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import CarRentalSystem from "../../Assets/Projects/CarRentalSystem.png";
import Konnect from "../../Assets/Projects/Konnect.png";
import Wanderlust from "../../Assets/Projects/Wanderlust.png";
import iSchool from "../../Assets/Projects/iSchool.png";
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
              imgPath={iSchool}
              isBlog={false}
              title="HupDup"
              description="Leveraged yargs to create custom GitHub command-line commands, enabling streamlined repository
                        management within the application. Implemented repository storage on AWS S3, ensuring scalable and secure version control with seamless
                        integration using fs modules for initialization locally. Developed a backend with rigorous error handling and data validation, ensuring reliability and stability in the
                        version control system."
              ghLink="https://github.com/DhiravAgrawal/HupDup"
              demoLink="https://hupdup.onrender.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iSchool}
              isBlog={false}
              title="iSchool"
              description="It is difficult to find time for the training necessary to gain new skills and boost your
                          productivity. With iSchool you’re able to learn at a pace that is comfortable for you.
                          iSchool is a powerful Learning Management System implementing the latest trends
                          in e-learning. E-Learning is learning utilizing electronic technologies to access
                          educational curriculum outside of a traditional classroom. "
              ghLink="https://github.com/DhiravAgrawal/iSchool"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
