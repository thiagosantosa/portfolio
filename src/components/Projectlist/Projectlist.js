import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import cartaoMais from '../../Assets/cartaoMais.jpg'
import lorealDermaclub from '../../Assets/loreal.jpg'

import hyundai from '../../Assets/hyundai.jpg'
import grupoMateus from '../../Assets/grupoMateus.jpg'
import portoSeguro from '../../Assets/portoSeguro.jpg'
import propay from '../../Assets/propay.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cartaoMais}
                isBlog={false}
                title="Cartão Mais"
                description="Development of all HTML / CSS design and structuring in React."
                ghLink="https://www.cartaomais.com.br"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={lorealDermaclub}
                isBlog={false}
                title="Loreal - Dermaclub"
                description="I worked as a front end developer in the project team and part of UX/UI in the Loreal Dermaclub points program project."
                ghLink="https://www.dermaclub.com.br"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hyundai}
                isBlog={false}
                title="Hyundai Brazil"
                description="I worked as a front end developer in the project team and part of UX/UI in the Hyundai project together in the pantry in macro prototyping using Adobe XD and Axure RP Pro for the wireframes."
                ghLink="https://www.hyundai.com.br"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={grupoMateus}
                isBlog={false}
                title="Grupo Mateus"
                description="Acting in all parts of UX / UI design using Figma and Miro for prototyping together with the project team, Angular front end development in projects such as receiving loads, import and pre-registration and internal improvements in systems."
                ghLink="https://www.grupomateus.com.br"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portoSeguro}
                isBlog={false}
                title="Porto Seguro"
                description="UX designer and front end programmer in the development of the discount benefits program."
                ghLink="https://www.portoseguro.com.br/beneficios"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={propay}
                isBlog={false}
                title="Propay"
                description="Restructuring of the Smart RH time attendance system. I worked with the project team as a design focal point for other designers using the Adobe XD tool for prototyping. In terms of structuring the screens, I used Angular technology from the beginning, creating the rules and methodologies for componentizing the project."
                ghLink="https://www.propay.com.br"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist