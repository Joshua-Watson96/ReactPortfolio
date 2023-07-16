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
import Image from "./images/max-me.jpg"


export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>About | {meta.title} </title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <body className="body">
                    

                <Row className="aboutTitle">
                    <Col>
                        <h2 >Here is a little information about me</h2>
                    </Col>
                </Row>
                <Row className="title">
                    <Col className="col-container" >
                    <div className="image">
                        <img src={Image} alt="max-me" className="image" />
                    </div>
                        <div className="infoText">
                            <p>{dataabout.aboutme}</p>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <h3 className="title-Work"> Work Timeline</h3>
                    </Col>
                    <Col className="workTimeline">
                        <tbody> 
                            {worktimeline.map((data, i) => {
                                return(
                                    <tr key={i}>
                                        <th scope="row">{data.jobtitle}</th>
                                        <td>{data.where}</td>
                                        <td>{data.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                    </Col>
                </Row>
                <Row>
                    <Col className="skills" >
                        <h2 className="title-Skills">Skills </h2>
                        {skills.map((data, i) => {
                            return(
                                <div key={i}>
                                    <h3 >{data.name}</h3>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
                </body>
            </Container>
        </HelmetProvider>
    )
}
