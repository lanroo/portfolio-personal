import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Mobile Developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            
        }, )
    })

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Space</span>
                        <h1>{`Hi there, I'm Lanna!`} <span className="wrap"> web developer</span></h1>
                        <p>Aqui você vai encontrar alguns projetos de minha autoria. Fique a vontade! </p>
                        <button onClick={() => console.log('connect')}>Let's go! <ArrowRightCircle size={25} /></button>
                    </Col>
                    < Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}