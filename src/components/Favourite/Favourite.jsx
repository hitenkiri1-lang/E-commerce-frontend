import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export class Favourite extends Component {
  render() {
    return (
      <Fragment>
                      <Container className='text-center' fluid={true}>
                          <div className='section-title text-center mb-55'><h2>My Favourites</h2>
                              <p>Some of our featured products...</p>
                          </div>
                          <Row>
                              <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                                  <Card className='image-box card'>
                                      <img className='center w-75' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                      <Card.Body>
                                          <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                          <p className='product-price-on-card'>Price: ₹6,999</p>
                                          <Button className='btn btn-sm'><i className="fas fa-trash-alt"></i> Remove</Button>
                                      </Card.Body>
                                  </Card>
                              </Col>
      
                              <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                                  <Card className='image-box card'>
                                      <img className='center w-75' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                      <Card.Body>
                                          <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                          <p className='product-price-on-card'>Price: ₹6,999</p>
                                        <Button className='btn btn-sm'><i className="fas fa-trash-alt"></i> Remove</Button>
                                      </Card.Body>
                                  </Card>
                              </Col>
      
                              <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                                  <Card className='image-box card'>
                                      <img className='center w-75' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                      <Card.Body>
                                          <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                          <p className='product-price-on-card'>Price: ₹6,999</p>
                                        <Button className='btn btn-sm'><i className="fas fa-trash-alt"></i> Remove</Button>
                                      </Card.Body>
                                  </Card>
                              </Col>
      
                              <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                                  <Card className='image-box card'>
                                      <img className='center w-75' src='https://rukminim1.flixcart.com/image/1536/1536/xif0q/mobile/c/f/r/-original-imahmqgaggagex35.jpeg?q=90' />
                                      <Card.Body>
                                          <p className='product-name-on-card'>Redmi 10A (Slate Grey, 32 GB)  (2 GB RAM)</p>
                                          <p className='product-price-on-card'>Price: ₹6,999</p>
                                        <Button className='btn btn-sm'><i className="fas fa-trash-alt"></i> Remove</Button>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          </Row>
                      </Container>
                  </Fragment>
    )
  }
}

export default Favourite
