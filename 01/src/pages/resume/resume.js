import React from "react";
import {Document, Page } from 'react-pdf'
import "./resume.css";
import ResumePDF from "./resume.pdf"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Resume = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8"/>
            </Helmet>
            <Container className="resumeContainer">
                <Row>
                    <div className="resumePdf">
                        <Document file={ResumePDF}
                        options={{workerSrc: "./resume.pdf"}}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    
                    </div>
                    <div>
                        <Button className="downloadBtn">
                            <a className="btnDwnload"
                            href="./resume.pdf"
                            download>
                                Download Resume here!
                            </a>
                            </Button>
                    </div>
                </Row>
            </Container>
        </HelmetProvider>
    )
}