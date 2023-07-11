import React from "react";
import "./about.css"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    dataabout,
    meta,
    worktimeline,
    skills
} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>About | {meta.title} </title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">About me</h1>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.aboutme}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4"> Work Timeline</h3>
                    </Col>
                    <Col lg="7">
                        {worktimeline}
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="7">
                        <h3 className="color_sec py-4">Skills </h3>
                        {skills}
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    )
}
