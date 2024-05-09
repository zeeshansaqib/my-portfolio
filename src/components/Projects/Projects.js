import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud from "../../Assets/Projects/cloud.png";
import news from "../../Assets/Projects/news.png";
import chat from "../../Assets/Projects/pixelone.png";

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
              imgPath={cloud}
              isBlog={true}
              title="Pixel Admin"
              description="PixelOne's manager that manage subscription, confirmation of payments, and the suspension of the customers.This was mainly used by developers and customer Suport team in PixelOne."
              ghLink="https://admin.pixelone.app/"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={true}
              title="PixelOne"
              description="A e-commerce business manager web app that provides real-time orders syncing from various platforms like shopify, woocommerce, drazz etc. It also provides a feature to manage the inventory, products, and customers."
              ghLink="https://web.pixelone.app/orders"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Pixel-base"
              description="A libiray of various  reuseable components that are build in React Typescript.The whole project is build in storybook which is a tool for UI development. It makes development faster and easier by isolating components."
              ghLink="https://github.com/pixelone-corp/pixel-base"
              // demoLink=""              
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
