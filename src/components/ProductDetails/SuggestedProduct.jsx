import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios';

export class SuggestedProduct extends Component {

    constructor() {
        super();
        this.state = {
            ProductData: [],
        }
    }

    componentDidMount() {
        let subcategory = this.props.subcategory;
        axios.get(AppURL.SimilarProduct(subcategory))
            .then(response => {
                this.setState({
                    ProductData: response.data
                });
            })
            .catch(error => { console.log("API Error:", error); })
    }


    render() {

        const MyList = this.state.ProductData;
        if (MyList.length > 0) {
            const MyView = MyList.map((ProductList, i) => {
                if (ProductList.special_price == "na") {
                    return <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="text-link" to={"/productdetails/" + ProductList.id}>
                            <Card className='image-box card'>
                                <img className='center' src={ProductList.image} />
                                <Card.Body>
                                    <p className='product-name-on-card'>{ProductList.title}</p>
                                    <p className='product-price-on-card'>Price: ${ProductList.price}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                }
                else {
                    return <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="text-link" to={"/productdetails/" + ProductList.id}>
                            <Card className='image-box card'>
                                <img className='center' src={ProductList.image} />
                                <Card.Body>
                                    <p className='product-name-on-card'>{ProductList.title}</p>
                                    <p className='product-price-on-card'>Price:<del className="text-secondary">${ProductList.price}</del>  ${ProductList.special_price}</p>

                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                }
            });

            return (
            <Fragment>
                <Container fluid={true} className='text-center'>
                    <div className='section-title text-center mb-55'><h2>You May Also Like</h2>
                        <p>Some of our suggested products...</p>
                    </div>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        )

        }
        else {

            return (
            <Fragment>
                <Container fluid={true} className='text-center'>
                    <div className='section-title text-center mb-55'><h2>You May Also Like</h2>
                        <p>Some of our suggested products...</p>
                    </div>
                    <p>There have no similar product right now...</p>
                </Container>
            </Fragment>
        )

        }
        
    }
}

export default SuggestedProduct
