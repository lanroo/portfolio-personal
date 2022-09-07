import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";




export const Projects = () => {

    const projects = [
      {
        title: "Web Developer",
        description: "Coding",
        imgUrl: projImg1,
      }, 
      {
        title: "Web Design",
        description: "UI/UX Design",
        imgUrl: projImg2,
      }, 
      {
        title: "Software Engineer",
        description: "Business",
        imgUrl: projImg3,
      }, 
      {
        title: "Web Developer",
        description: "Coding",
        imgUrl: projImg1,
      }, 
      {
        title: "Web Developer",
        description: "Coding",
        imgUrl: projImg2,
      },  

    ]
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p> Descrição para o projeto..</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"> Tab Three</Nav.Link>
                            </Nav.Item>
                         
                        </Nav>
                        <Tab.Content>

                        </Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => { 
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Local para texto, apenas teste.</Tab.Pane>
                            <Tab.Pane eventKey="third">Local para texto 2, apenas teste</Tab.Pane>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}