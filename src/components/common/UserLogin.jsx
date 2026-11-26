import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import { Link } from 'react-router-dom'

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
                                    <h4 className='section-title-login'>User Login</h4>
                                    <input className='form-control m-2' type='email' placeholder='Enter Your Email'></input>
                                    <input className='form-control m-2' type='password' placeholder='Enter Your Password'></input>
                                    <Button className='btn btn-block m-2 site-btn-login'>Login</Button>
                                    <br></br> <br></br>
                                    <hr/>
                                    <p><b>Don't Have an Account? <Link to="/register">Register</Link></b></p>
                                    <p><b>Forget My Password? <Link to="/forgetpassword">Forgot Password</Link></b></p>
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
