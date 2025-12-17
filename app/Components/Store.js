"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState, useEffect } from "react";
export default function Store() {
  const [store, serStore] = useState([]);
  useEffect(() => {
    async function fetchStore() {
      const response = await fetch("/templets.json");
      const data = await response.json();
      serStore(data);
    }
    fetchStore();
  }, []);
  return (
    <>
      <section id="store">
        <Container>
          <Row className="store-container">
            {store.map((index) => {
              return (
                <Col
                  className="d-flex justify-content-around mb-4"
                  key={index.id}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Card style={{ width: "18rem" }} className="min-card">
                    <Card.Img variant="top" src={index.image} />
                    <Card.Body>
                      <Card.Title className="temp-title">
                        {index.tempName}
                      </Card.Title>
                      <Button
                        variant="primary"
                        href={index.liveLink}
                        target="_blank"
                        el="noopener noreferrer"
                        className="btn-live"
                      >
                        Live Preview
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
