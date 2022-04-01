import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid={true} className="py-5">
        <Container>
          <Row>
            <Col
              sm={{ size: 8, offset: 2 }}
              md={{ size: 6, offset: 3 }}
              lg={{ size: 4, offset: 4 }}
            >
              <img
                draggable="false"
                src="/logo.png"
                className="w-100"
                alt={"Logo " + process.env.REACT_APP_TITLE}
              />
            </Col>
          </Row>
          <Row className="my-5 text-center">
            <Col>
              <Jumbotron>
                <h1 className="display-4 text-light">Welcome to Pokemon</h1>
                <h2 className="lead text-light">
                  Project Assignment
                  <br />
                  Web Platform Engineers - Tokopedia
                </h2>
                <p className="text-light">
                  Created by {process.env.REACT_APP_CREATOR}
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="my-5 justify-content-center">
            <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
            <Col>
              <Link to="/pokemon-list">
                <Button color="primary" className="w-100">
                  Pokemon List
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/my-pokemon-list">
                <Button color="warning" className="w-100">
                  My Pokemon
                </Button>
              </Link>
            </Col>
            <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
