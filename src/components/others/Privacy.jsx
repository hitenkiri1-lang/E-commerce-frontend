import React, { Component, Fragment } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import axios from 'axios'
import AppURL from '../../api/AppURL'
import parse from "html-react-parser"

export class Privacy extends Component {
    constructor() {
        super();
        this.state = {
            privacy: "",
            loaderDiv: "",
            mainDiv: "d-none"
        }
    }
    componentDidMount() {
        axios.get(AppURL.AllSiteInfo)
            .then(response => {
                let StatusCode = response.status;
                if (StatusCode === 200) {
                    let JsonData = (response.data)[0]['privacy'];
                    this.setState({ privacy: JsonData, loaderDiv:"d-none", mainDiv:"" });
                }
            })
            .catch(error => { })
    }
  render() {
    return (
        <Fragment>
            <Container>
                <Row className='p-2'>
                    <Col md={12} lg={12} sm={12} xs={12} className='mt-2 shadow-sm rounded-lg bg-white'>
                    <div className={this.state.loaderDiv}>
                                <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-6"></div>
                                            <div class="ph-col-6 empty"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className={this.state.mainDiv}>
                        <h4 className='section-title-login'>Privacy Policy</h4>
                        <p className='section-sub-title'>
                            {parse(this.state.privacy)}
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Privacy
