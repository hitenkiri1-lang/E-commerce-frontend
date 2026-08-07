import React, { Component, Fragment } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import parse from "html-react-parser";

export class About extends Component {
    constructor() {
        super();
        this.state = {
            about: ""
        }
    }
    componentDidMount() {
        axios.get(AppURL.AllSiteInfo)
        .then(response => {
            let StatusCode = response.status;
            if(StatusCode === 200)
            {
                let JsonData =(response.data)[0]['about'];
                this.setState({about: JsonData});
            }
        })
        .catch(error => {})
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                            <h4 className='section-title-login'>About Us</h4>
                            <p className='section-sub-title'>
                                { parse(this.state.about) }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About
