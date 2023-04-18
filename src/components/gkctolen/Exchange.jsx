import React from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { TbArrowsRightLeft } from "react-icons/tb";
const Exchange = () => {
  return (
    <>
      <Card className="border bg-dark p-5">
        <Card.Body>
          <Row>
            <Col>
              <Card className="bg-dark py-4 border-0">
                <Card.Body>
                  <div className="mb-3 d-flex justify-content-between">
                    <p className="m-0">Selling</p>
                    <p className="m-0">Available: 3 BTC</p>
                  </div>
                  <div className="mb-3 p-4 d-flex justify-content-between align-items-center border rounded">
                    <Form.Select aria-label="Btc" className="w-25 text-dark">
                      <option>BTC</option>
                      <option value="1">BTC</option>
                      <option value="2">BTC</option>
                      <option value="3">BTC</option>
                    </Form.Select>
                    <p className="m-0">Available: 3 BTC</p>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <p className="m-0">Current Rate</p>
                    <p className="m-0">1 BTC = 17,166 MATIC</p>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <p className="m-0">Rate for 24 hours</p>
                    <p className="m-0">1.33%</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={1}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <TbArrowsRightLeft />
              </div>
            </Col>
            <Col>
              <Card className="bg-dark py-4 border-0">
                <Card.Body>
                  <div className="mb-3 d-flex justify-content-between">
                    <p className="m-0">Buying</p>
                    <p className="m-0">Balance: 1300 MATIC</p>
                  </div>
                  <div className="mb-3 p-4 d-flex justify-content-between align-items-center border rounded">
                    <Form.Select aria-label="Btc" className="w-25 text-dark">
                      <option>MATIC</option>
                      <option value="1">MATIC</option>
                      <option value="2">MATIC</option>
                      <option value="3">MATIC</option>
                    </Form.Select>
                    <p className="m-0">Available: 3 BTC</p>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <p className="m-0">Fee: 0.02%</p>
                    <p className="m-0">3.4 MATIC</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="px-4">
              <Button variant="secondary" size="lg" className="w-100">
                Exchange
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Exchange;
