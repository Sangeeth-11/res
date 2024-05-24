import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} className="column">
          <div className="content">Column 1</div>
        </Col>
        <Col xs={12} md={4} className="column">
          <div className="content">Column 2</div>
        </Col>
        <Col xs={12} md={4} className="column">
          <div className="content">Column 3</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;