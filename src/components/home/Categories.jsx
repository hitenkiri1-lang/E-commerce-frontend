import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'><h2>Categories</h2>
                        <p>Some of our featured products...</p>
                    </div>
                    <Row>
                        <Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            
                            </Row>

                        </Col>

                        <Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className='h-100 w-100 text-center'>
                                        
                                        <Card.Body>
                                            <img className='center' src='https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg' />
                                            <h5 className='category-name'>Mobiles</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Categories
