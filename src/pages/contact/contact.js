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
        contactConfig.PK
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
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> Contact Me</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    )
}