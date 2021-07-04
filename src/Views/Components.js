import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Components() {
  return (
    <Row>
      <Col sm={2} style={{ padding: "15px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item action>Work in progress</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm={10} style={{ padding: "15px" }}>
        <Container fluid="xl">
          <p>Nothing to display</p>
        </Container>
      </Col>
    </Row>
  )
}
