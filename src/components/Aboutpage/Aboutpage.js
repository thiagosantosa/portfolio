import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                        With 18 years of experience in the internet area, I have worked in different sectors such as creation, projects and development. I developed projects for product, marketing and IT sectors for large clients such as SKY, Globo.com, Yahoo Shopping, Samsung, Bradesco, Royal Canin, Porto Seguro, Ticket, Loreal, Cacau Show, Grupo Mateus, Hyundai etc... through the companies that I exercised my functions and tasks.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>UX Design</li>
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                    <li>WebDesign</li>
                                    <li>Adobe Package</li>
                                    <li>Interaction design</li>
                                    <li>Miro</li>
                                    <li>Information Architecture Axure RP Pro</li>
                                    <li>Scrum Methodology</li>
                                    <li>Design System</li>
                                    <li>Componentization of Projects</li>
                                    <li>Design Sprint</li>
                                    <li>Web Responsive</li>
                                </Col>
                                <Col md={5}>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>HTML 5 </li>
                                    <li>CSS / SCSS</li>
                                    <li>StyleComponent</li>
                                    <li>Angular Material</li>
                                    <li>React Material UI</li>
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>Jquery</li>
                                    <li>Agile methodologies</li>
                                    <li>GitHub</li>
                                    <li>Azure Scrum Methodology</li>
                                    <li>VS Code</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage