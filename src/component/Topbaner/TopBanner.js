import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

export default function TopBanner() {
  return (
    <Fragment>
      <Container fluid={true} className="topFixedBanner p-0">
        <div className="topBannerOverly">
          <Container className="topContent">
            <Row>
              <Col className="text-center">
                <h1 className="topTitle">Your Planer</h1>
                <h4 className="topSubTitle">Your complete associate </h4>
                <Button variant="primary">More Info</Button>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
}
