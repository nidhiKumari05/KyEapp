import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import ProductDetails from './component/ProductDetails';
import CompareProducts from './component/CompareProducts';
import About from './component/About';
import Contacts from './component/Contact';
import Footer from './component/Footer'; 
import Profile from './component/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container fluid>
          <Row>
            <Col md={2} className="p-0">
              <Sidebar />
            </Col>
            <Col md={10} className="p-4">
              <Routes>
                <Route path="/" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="//profile" element={<Profile />} />
                <Route path="/compare" element={<CompareProducts />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
