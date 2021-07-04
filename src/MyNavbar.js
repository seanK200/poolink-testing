import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import './index.css'

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Poolink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/components">컴포넌트</Nav.Link>
            <Nav.Link href="/advanced-components">고급 컴포넌트</Nav.Link>
            <Nav.Link href="/status">작업상태</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
    </Navbar>
  )
}
