import React from "react";
import "./portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "../../content_option";

export const Portfolio = () => {
    return(
        <HelmetProvider>
            <Container className="portHeader">
                <Helmet>
                    <meta charset="utf-8"/>
                </Helmet>
                <Row className="portfolioTitle">
                    <h1 className="pageHeading">Portfolio</h1>
                    <h2>Here is some of my work</h2>
                </Row>
                <div className="projects">
  {dataportfolio.map((data, i) => {
    return (
      <div key={i}>
        <img src={data.img} alt="Project Image" className="prjImg" />
        <div className="content">
          <p className="description">{data.description}</p>
          <a href={data.link} className="repo">View Project Repo</a>
          <br/>
          <a href={data.deployedLink} className="deployed">View deployed link here!</a>
        </div>
      </div>
    );
  })}
</div>

                        
                    
                
            </Container>
        </HelmetProvider>
    )
}