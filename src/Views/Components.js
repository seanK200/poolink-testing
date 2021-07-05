import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import KebabButton from '../Components/Basic/KebabButton';
import Renderer from '../Components/Renderer';

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
          <h1>KebabButton</h1>
          <p>추가적 동작 수행이 가능한 버튼</p>
          <Renderer component={<KebabButton />}/>
        </Container>
      </Col>
    </Row>
  )
}
