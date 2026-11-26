import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Forget from '../../assets/images/forget.jpg'
import { Link } from 'react-router-dom'

class ForgetPassword extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                            <Row className='text-center'>
                                <Col md={6} lg={6} sm={12} xs={12} className='d-flex justify-content-center'>
                                    <Form className='onboardForm'>
                                        <h4 className='section-title-login'>Forget Password?</h4>
                                    
                                        <input className='form-control m-2' type='email' placeholder='Enter Your Email'></input>
                                        
                                        <Button className='btn btn-block m-2 site-btn-login'>Reset Password</Button>
                                        <br></br> <br></br>
                                        <hr />
                                    </Form>

                                </Col>

                                <Col md={6} lg={6} sm={6} xs={6} className='p-0 Desktop m-0'>
                                    <img className='onboardBanner' src={Forget} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ForgetPassword
