import React from "react";
import { pdfjs } from 'react-pdf'
import "./resume.css";
import ResumePDF from "./resume.pdf"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Button } from "react-bootstrap";
import ResumeImage from "./resume.png"


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export const Resume = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
            </Helmet>
            <Container className="resumeContainer">
                {/* Download PDF button  */}
                <Button className="downloadBtn">
                    <a className="btnDwnload"
                        href={ResumePDF}
                        download>
                        Download Resume here!
                    </a>
                </Button>
                <Row>
                    {/* Resume Image */}
                    <div class="resumePic">
                        <img src={ResumeImage} alt="resume" />
                    </div>
                    </Row>
            </Container>
        </HelmetProvider>
    )
}