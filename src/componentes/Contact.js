import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''

    }

    const [formDetails, setFormDetails ] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let reponse = await fetch("http://localhost:3000/contact", { 
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
    })
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
        setStatus({ sucess: true, message: 'Mensagem enviada com sucesso!'});
    
    } else { 
    setStatus({ sucess: false, message: 'Algo de errado ocorreu, por favor, tente mais tarde.'});
    }
                      
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                    </Col>
                    <Col md={6}>
                        <h2> Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1"></Col>
                                    <input type="text" value={formDatails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                                   
                                <Col sm={6} className="px-1"><input type="text" value={formDatails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} /></Col>
                                <Col sm={6} className="px-1"><input type="email" value={formDatails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /></Col>
                                <Col sm={6} className="px-1"><input type="tel" value={formDatails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} /></Col>
                                <Col>
                                    <textarea row="6" value={formDatails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
                                    </Col>

                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}