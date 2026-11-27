import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class UserLogin extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message: '',
            loggedIn: false
        }
    }

    formSubmit = (e) => {
    e.preventDefault();
    const data = {
        email: this.state.email,
        password: this.state.password,
    }

    axios.post(AppURL.UserLogin, data)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            toast.success(response.data.message, { position: "top-right", autoClose: 1500 });

            this.timer = setTimeout(() => {
                this.props.setUser(response.data.user);
                this.setState({ loggedIn: true });
            }, 1500);
        })
        .catch(error => {
            const errors = error.response?.data?.errors;
            const msg = errors
                ? Object.values(errors)[0][0]
                : (error.response?.data?.message || 'Something went wrong. Please try again.');
            toast.error(msg, { position: "top-right" });
        });
}

componentWillUnmount() {
    clearTimeout(this.timer);
}

    render() {

        // Redirect to profile page if logged in
        if (this.state.loggedIn) {
            return <Navigate to="/profile" />;
        }

        if (localStorage.getItem('token')) {
            return <Navigate to="/profile" />;
        }
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                            <Row className='text-center'>
                                <Col md={6} lg={6} sm={12} xs={12} className='d-flex justify-content-center'>
                                    <Form className='onboardForm' onSubmit={this.formSubmit}>
                                        <h4 className='section-title-login'>User Login</h4>

                                        <input className='form-control m-2' type='email' placeholder='Enter Your Email' onChange={(e) => this.setState({ email: e.target.value })}></input>


                                        <input className='form-control m-2' type='password' placeholder='Enter Your Password' onChange={(e) => this.setState({ password: e.target.value })}></input>


                                        <Button type='submit' className='btn btn-block m-2 site-btn-login'>Login</Button>
                                        <br></br> <br></br>
                                        <hr />
                                        <p><b>Don't Have an Account? <Link to="/register">Register</Link></b></p>
                                        <p><b>Forget My Password? <Link to="/forgetpassword">Forgot Password</Link></b></p>
                                    </Form>

                                </Col>

                                <Col md={6} lg={6} sm={6} xs={6} className='p-0 Desktop m-0'>
                                    <img className='onboardBanner' src={Login} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </Fragment>
        )
    }
}

export default UserLogin
