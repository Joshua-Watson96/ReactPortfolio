import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./contact.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactMe = () => {
    const [formData, setFormdata] = useState({
        email:"",
        name:"",
        message:"",
        loading: false,
        alertmessage: "",
        show: false,
        variant: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true })

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactConfig.EMAIL,
            message: formData.message,
        };

    emailjs
    .send(
        contactConfig.EMAIL,
        contactConfig.TEMPLATE_ID,
        templateParams,
        contactConfig.USER_ID
    )
    .then(
        (result) => {
            console.log(result.text);
            setFormdata({
                loading: false,
                alertmessage: "Success!",
                variant: "success",
                show: true,
            });
        },
        (error) => {
            console.log(error.text);
            setFormdata({
                alertmessage: `failed to send, ${error.text}`,
                variant: "danger",
                show: true,
            })
        }
    );
    };

    const handlechange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Contact </title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="title">
                    <Col >
                    
                        
                    </Col>
                </Row>
                <Row className="formdata">
                    <Col >
                    <Alert
                     variant ={formData.variant}
                     className={`${
                        formData.show ? "d-block" : "d-none"}`}
                        onClose={() => setFormdata({show : false})}
                        dismissible>
                            <p className="my-0">{formData.alertmessage}</p>
                    </Alert>
                    </Col>
                    <Col  className="title">
                        
                        <address>
                            <strong>Email me! </strong>{" "}
                            <a href={`mailto:${contactConfig.EMAIL}`}>
                                
                            </a>
                        </address>
                        </Col>
                        <Col className="title">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <Row>
                                    {/* user enters name */}
                                    <Col  className="form-group">
                                        <input 
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Please enter your name here!"
                                        value={formData.name || ""}
                                        type="text"
                                        required
                                        onChange={handlechange} />
                                    </Col>
                                    <Col   className="form-group">
                                        {/* user enters email */}
                                        <input
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Please enter your email here!"
                                        type="email"
                                        value={formData.email || "" }
                                        required
                                        onChange={handlechange}/>
                                    </Col>
                                </Row>
                                <textarea 
                                // user enters message they want to send
                                className="contact-form-message"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="6"
                                value={formData.message}
                                onChange={handlechange}
                                required>

                                </textarea>
                                <br />
                                <Row>
                                    <Col  className="form-button">
                                        <button className="btnSend" type="submit">
                                            {formData.loading ? "Sending" : "Send"}
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>

                </Row>
            </Container>
        </HelmetProvider>
    )
}