/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tmg from "../../asset/img/computer.jpg";
export default function Courses() {
  return (
    <Fragment>
      <Container className="text-center ">
        <h1 className="serviceMainTitle">Course we offer</h1>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={Tmg} alt="web" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className="text-start courseTitle">Web Development</h5>
                <p className="text-start courseDes">
                  I build web app as your need for your business and I build web
                  app as your need for your business
                </p>
                <a className="courseDetails float-left" href="#">
                  Details
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={Tmg} alt="web" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className="text-start courseTitle">Web Development</h5>
                <p className="text-start courseDes">
                  I build web app as your need for your business and I build web
                  app as your need for your business
                </p>
                <a className="courseDetails float-left" href="#">
                  Details
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={Tmg} alt="web" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className="text-start courseTitle">Web Development</h5>
                <p className="text-start courseDes">
                  I build web app as your need for your business and I build web
                  app as your need for your business
                </p>
                <a className="courseDetails float-left" href="#">
                  Details
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={Tmg} alt="web" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className="text-start courseTitle">Web Development</h5>
                <p className="text-start courseDes">
                  I build web app as your need for your business and I build web
                  app as your need for your business
                </p>
                <a className="courseDetails float-left" href="#">
                  Details
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
