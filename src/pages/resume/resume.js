import React from "react";
import { Document, Page, pdfjs } from 'react-pdf'
import "./resume.css";
import ResumePDF from "./resume.pdf"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row,  Button } from "react-bootstrap";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export const Resume = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8"/>
            </Helmet>
            <Container className="resumeContainer">
            <Button className="downloadBtn">
                         <a className="btnDwnload"
                            href={ResumePDF}
                            download>
                                Download Resume here!
                            </a>
                            </Button>
                <Row>
                    
                        <Document file={ResumePDF} >

                            <Page wrap pageNumber={1}/>

                        </Document>
                    
                   
                        
                    
                </Row>
            </Container>
        </HelmetProvider>
    )
}