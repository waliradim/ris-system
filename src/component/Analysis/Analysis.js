import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

export default function Analysis() {
  const data = [
    {
      technology: "ASP.NET",
      project: 100,
    },
    {
      technology: "Java",
      project: 70,
    },
    {
      technology: "React",
      project: 80,
    },
    {
      technology: ".NET Core",
      project: 50,
    },
    {
      technology: "SQL",
      project: 75,
    },
    {
      technology: "Next",
      project: 60,
    },
    {
      technology: "JavaScript",
      project: 85,
    },
    {
      technology: "nodejs",
      project: 90,
    },
  ];
  return (
    <Fragment>
      <Container className="text-center ">
        <h1 className="serviceMainTitle">Technology Used</h1>
        <Row style={{ width: "100%", height: "300px" }}>
          <Col lg={6} md={12} sm={12}>
            <ResponsiveContainer>
              <BarChart width={100} height={300} data={data}>
                <XAxis dataKey="technology" />
                <Bar dataKey="project" fill="rgb(19, 241, 119)"></Bar>
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className="text-justify des">
              BuiltWith® covers 57,811+ internet technologies which include
              analytics, advertising, hosting, CMS and many more. See how the
              internet technology usage changes on a weekly basis. With
              BuiltWith.com Technology Trends data back to November 2008.
              BuiltWith® covers 57,811+ internet technologies which include
              analytics, advertising, hosting, CMS and many more. See how the
              internet technology usage changes on a weekly basis. With
              BuiltWith.com Technology Trends data back to November 2008.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
