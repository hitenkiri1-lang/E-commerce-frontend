import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

class FeaturedLoading extends Component {
    render() {
        let isLoading = this.props.isLoading;

        return (
            <div className={isLoading}>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'><h2>Featured Product</h2>
                        <p>Some of our featured products...</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                            {/* <a href="" className="card image-box h-100 w-100">
                            </a> */}
                            <div className="ph-picture"></div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12 small"></div>
                                        <div className="ph-col-12 small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default FeaturedLoading
