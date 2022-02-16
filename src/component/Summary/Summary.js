import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
export default function Summary() {
  return (
    <Fragment>
      <Container fluid={true} className="summaryBanner summerySection p-0">
        <div className="summaryBannerOverly">
          <Container className="text-center">
            <Row>
              <Col lg={8} md={6} sm={12}>
                <Row className="countSection">
                  <Col>
                    <h1 className="countNumber">
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <ReactVisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </ReactVisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Total Client</h4>
                    <hr className="bg-white w-20" />
                  </Col>
                  <Col>
                    <h1 className="countNumber">
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <ReactVisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </ReactVisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h1>
                    <h4 className="countTitle">Total Project</h4>
                    <hr className="bg-white w-20" />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card className="workCard">
                  <Card.Body>
                    <Card.Title className="cardTitle text-start">
                      How I Work
                    </Card.Title>
                    <Card.Text>
                      <p className="cardSubTitle text-start">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckCircle}
                        />
                        Requirement Gathering
                      </p>
                      <p className="cardSubTitle text-start">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckCircle}
                        />
                        System Analysis
                      </p>
                      <p className="cardSubTitle text-start">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckCircle}
                        />
                        Testing
                      </p>
                      <p className="cardSubTitle text-start">
                        <FontAwesomeIcon
                          className="iconBullet"
                          icon={faCheckCircle}
                        />
                        Implemation
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
}
