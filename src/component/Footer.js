import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px 0', textAlign: 'center' }}>
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 KYC Products. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
