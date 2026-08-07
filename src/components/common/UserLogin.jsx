import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'

export class UserLogin extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row className='p-2'>
                    <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                        <Row className='text-center'>
                            <Col md={6} lg={6} sm={12} xs={12} className='d-flex justify-content-center'>
                                <Form className='onboardForm'>
                                    <h4 className='section-title-login'>User Sign In</h4>
                                    <h6 className='section-sub-title'>Please Enter Your Valid Mobile Number</h6>
                                    <input className='form-control m-2' type='text' placeholder='Enter Your Mobile Number'></input>
                                    <Button className='btn btn-block m-2 site-btn-login'>Next</Button>
                                </Form>

                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6} className='p-0 Desktop m-0'>
                                <img className='onboardBanner' src={Login}/>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default UserLogin
