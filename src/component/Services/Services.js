import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import Tmg from "../../asset/img/computer.jpg";
export default function Services() {
  return (
    <Fragment>
      <Container className="text-center ">
        <Row>
          <h1 className="serviceMainTitle">MY SERVICES</h1>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={Tmg} alt="web" />
              <h2 className="serviceNameTitle">Web Development</h2>
              <p className="serviceDesTitle">
                Software development with effective digital transformation to
                help you tackle all technical challenges.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={Tmg} alt="web" />
              <h2 className="serviceNameTitle">Data Servey</h2>
              <p className="serviceDesTitle">
                Easy interdepartmental information flow for better corporate and
                inter-organizational systems.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={Tmg} alt="web" />
              <h2 className="serviceNameTitle">Adds Support</h2>
              <p className="serviceDesTitle">
                Developments that significantly reduce manual work in collection
                and processing functionalities to boost productivity.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
