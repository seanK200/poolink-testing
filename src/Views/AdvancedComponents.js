import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Renderer from '../Components/Renderer';
import LinkItem from '../Components/Advanced/LinkItem';

export default function AdvancedComponents() {
  return (
    <Row>
      <Col sm={2} style={{ padding: "15px" }}>
        <ListGroup variant="flush">
          <ListGroup.Item action>LinkItem</ListGroup.Item>
          <ListGroup.Item action>BoardItem</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm={10} className="bg-light vh-100 overflow-scroll" style={{ padding: "15px" }}>
        <Container fluid="xl">
          <h1>LinkItem</h1>
          <p>보드 내부에 존재하는 각각의 링크들</p>
          <Renderer component={<LinkItem />} bg="pl-lightblue" noshadow />
        </Container>
      </Col>
    </Row>
  )
}
