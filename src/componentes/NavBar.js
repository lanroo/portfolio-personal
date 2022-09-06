import {NavBar, Container, Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
    return (
     <Navbar expand="lg"> 
     <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={''} alt=""></img></a>
                    <a href="#"><img src={''} alt=""></img></a>
                    <a href="#"><img src={''} alt=""></img></a>
                </div>
                <button className="vvd" onClick={() => console.log ('connect')}><span>Conectar!</span></button>
            </span>
        </Navbar.Collapse>
     </Container>
     </Navbar>
)    
}