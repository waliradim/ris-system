import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Tmg from "../../asset/img/computer.jpg";
export default function Project() {
  return (
    <Fragment>
      <Container className="text-center ">
        <Row>
          <h1 className="serviceMainTitle">Recent Project</h1>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCards">
              <img src={Tmg} alt="web" />
              <Card.Body>
                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go to </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCards">
              <img src={Tmg} alt="web" />
              <Card.Body>
                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go to </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCards">
              <img src={Tmg} alt="web" />
              <Card.Body>
                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                <Card.Text className="projectCardDes">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go to </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
