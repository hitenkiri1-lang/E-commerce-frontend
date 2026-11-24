import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class SuggestedProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='text-center'>
                    <div className='section-title text-center mb-55'><h2>You May Also Like</h2>
                        <p>Some of our suggested products...</p>
                    </div>
                    <Row>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="text-link" to="/productdetails">
                                <Card className='image-box card'>
                                    <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                        <p className='product-price-on-card'>Price: ₹6,999</p>
                                    </Card.Body>
                                </Card>
                            </Link>

                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                            <Card className='image-box card'>
                                <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                <Card.Body>
                                    <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                    <p className='product-price-on-card'>Price: ₹6,999</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                            <Card className='image-box card'>
                                <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                <Card.Body>
                                    <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                    <p className='product-price-on-card'>Price: ₹6,999</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                            <Card className='image-box card'>
                                <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                <Card.Body>
                                    <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                    <p className='product-price-on-card'>Price: ₹6,999</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                            <Card className='image-box card'>
                                <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                <Card.Body>
                                    <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                    <p className='product-price-on-card'>Price: ₹6,999</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                            <Card className='image-box card'>
                                <img className='center' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                <Card.Body>
                                    <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                    <p className='product-price-on-card'>Price: ₹6,999</p>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default SuggestedProduct
