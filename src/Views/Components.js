import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Components() {
  return (
    <Row>
      <Col sm={2} style={{ padding: "15px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item action>KebabButton</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm={10} className="bg-light vh-100 overflow-scroll" style={{ padding: "15px" }}>
        <Container fluid="xl">
          <p>No data.</p>
        </Container>
      </Col>
    </Row>
  )
}
