import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/filestorage.svg";
import heartRateMonitor from "../../Assets/Projects/heart_rate_monitor.svg";
import summarizer from "../../Assets/Projects/youtube_summarizer.svg";
import monty from "../../Assets/Projects/monty.svg";
import cheaperPhone from "../../Assets/Projects/cheaper_phone.svg";
import simpleShell from "../../Assets/Projects/simple_shell.svg";

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
              imgPath={summarizer}
              isBlog={false}
              title="AI Video Summarization Service"
              description="An asynchronous AI video summarization service built with FastAPI and Celery. Features multi-stage processing pipeline including video/audio extraction, OpenAI Whisper transcription, and GPT-based summarization. Implements job queuing and status tracking for robust handling of long-running tasks."
              demoLink="https://tifi.tv/youtube-summarizer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="File Management Service"
              description="Developed a robust file storage service with Node.js utilizing MongoDB for hierarchical file organization and Redis for asynchronous image processing. Implemented base64 file encoding with UUID naming convention, achieving efficient file retrieval through MIME type preservation. The system features automated thumbnail generation for images through Redis queuing and maintains data integrity with 95% test coverage across unit and integration tests using chai and mocha frameworks."
              ghLink="https://github.com/abimbola-michael/alx-files_manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheaperPhone}
              isBlog={false}
              title="Cheaper Phone Ecommerce Application"
              description="Architected a comprehensive e-commerce platform with automated product seeding through web scraping. Implemented a distributed system using Docker containers for service isolation, featuring a custom web scraper built with Spider for dynamic product data collection. The system utilizes Nginx for load balancing and static file serving, achieving 99% uptime and successful data synchronization across services. Docker Compose orchestrates the entire infrastructure, ensuring seamless communication between the scraping service, database, and web application layers."
              ghLink="https://github.com/chukssomzzy/cheaper_phone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartRateMonitor}
              isBlog={false}
              title="IoT Enable Abnormal Heart Rate Detector With ESP32"
              description="Engineered an IoT-based abnormal heart rate detection system using ESP32 microcontroller for real-time ECG signal processing. Implemented interrupt-driven sampling for accurate ECG data acquisition while performing continuous feature extraction and analysis in the main loop. Integrated a regression model for anomaly detection achieving 92% accuracy in identifying abnormal heart rates. The system streams processed data to Firebase Firestore for remote monitoring, handling up to 250 samples per second with minimal latency through the Firebase ESP client."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monty}
              isBlog={false}
              title="Monty"
              description="A C-based stack interpreter that processes custom bytecode instructions for stack manipulation and ASCII output. Implements core stack operations like push, swap, and display (pall/pchar), demonstrating low-level memory management and interpreter design principles."
              ghLink="https://github.com/chukssomzzy/monty"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpleShell}
              isBlog={false}
              title="Simple Shell"
              description="A custom shell implementation in C that replicates core functionalities of sh. Features command execution, path resolution, and process management using fork/exec system calls, demonstrating low-level systems programming and UNIX process handling."
              ghLink="https://github.com/chukssomzzy/simple_shell"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
