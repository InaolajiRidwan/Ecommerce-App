import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  '../EcommerceNavvv.css'

export const Ecommercenav = ({ elect, hell }) => {
  return (
    <div>
      {
        <Navbar expand="lg" className="navcolor">
          <Container>
            <Navbar.Brand
              style={{ fontWeight: "bold", color: "white" }}
              href="#home"
            >
              Ecommerce WebApp Developed by{" "}
            </Navbar.Brand>
            <Navbar.Brand
              style={{ fontWeight: "bolder", color: "white" }}
              className="fs-1"
              href="#home"
            >
              DevFlame
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  style={{ fontWeight: "bold" }}
                  title="Categories"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    electronics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    jewelery
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    men's clothing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    women's clothing
                  </NavDropdown.Item>
                </NavDropdown>
                <Form inline className="ms-5 w-100">
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search by Category"
                        className=" mr-sm-2"
                        style={{ width: "35rem" }}
                        onChange={hell}
                      />
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </div>
  );
};
