import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import handleClose from 'react-bootstrap/Modal';
import show from 'react-bootstrap/Modal';

export class Notification extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    };
    handleShow = () => {
        this.setState({ show: true })
    };
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1   px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card className="notification-card">
                                <Card.Body>
                                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6><i className="fa fa-bell"></i> Date: 22/12/2010</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Woohoo, you are reading this text in a modal!</h6>
                        <p>During my internship at IMBUESOFT LLP, I encountered several technical and practical challenges while working on the assigned projects. These challenges became valuable learning opportunities and helped me improve my analytical thinking, problem-solving abilities, and technical skills. With the guidance of my mentors and continuous self-learning, I successfully overcame these difficulties and completed both projects within the internship period.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Notification
