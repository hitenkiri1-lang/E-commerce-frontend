import React, { Component, Fragment } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import ReactDOM from 'react-dom';

export class ProductDetails extends Component {

    constructor() {
        super();
    }


    imageOnClick = (event) => {
        let imagesrc = event.target.getAttribute('src');
        let previewImg = document.getElementById('previewImg');
        previewImg.setAttribute('src', imagesrc);
    }

    PriceOption(price, special_price) {
        if (special_price == "na") {
            return (<p className="product-name-on-card">Price: ₹{price}</p>);
        } else {
            return (
                <p className="product-name-on-card">Price: <strike className="text-secondary">₹{price}</strike>  ₹{special_price}</p>
                
            );
        }
    }

    render() {
        let ProductAllData = this.props.data;

        //PRODUCTLIST TABLE DATA
        let title = ProductAllData['productList'][0]['title'];
        let brand = ProductAllData['productList'][0]['brand'];
        let category = ProductAllData['productList'][0]['category'];
        let subcategory = ProductAllData['productList'][0]['subcategory'];
        let image = ProductAllData['productList'][0]['image'];
        let product_code = ProductAllData['productList'][0]['product_code'];
        let remark = ProductAllData['productList'][0]['remark'];
        let price = ProductAllData['productList'][0]['price'];
        let special_price = ProductAllData['productList'][0]['special_price'];
        let star = ProductAllData['productList'][0]['star'];

        //PRODUCTDETAILS TABLE DATA
        let short_description = ProductAllData['productDetails'][0]['short_description'];
        let long_description = ProductAllData['productDetails'][0]['long_description'];
        let product_id = ProductAllData['productDetails'][0]['product_id'];
        let color = ProductAllData['productDetails'][0]['color'];
        let size = ProductAllData['productDetails'][0]['size'];
        let image_four = ProductAllData['productDetails'][0]['image_four'];
        let image_three = ProductAllData['productDetails'][0]['image_three'];
        let image_two = ProductAllData['productDetails'][0]['image_two'];
        let image_one = ProductAllData['productDetails'][0]['image_one'];


        var ColorDiv = "d-none";
        if (color != null) {
            let ColorArray = color.split(',');
            var ColorOption = ColorArray.map((ColorList, i) => {
                return <option value={ColorList}>{ColorList}</option>
            });
            ColorDiv = "";
        }
        else {
            ColorDiv = "d-none";
        }


        var SizeDiv = "d-none";
        if (size != null) {
            let SizeArray = size.split(',');
            var SizeOption = SizeArray.map((SizeList, i) => {
                return <option value={SizeList}>{SizeList}</option>
            });
            SizeDiv = "";
        }
        else {
            SizeDiv = "d-none";
        }


        return (
            <Fragment>
                <Container className="BetweenTwoSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img id="previewImg" className="w-100 bigimage" src={image_one} />
                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnClick} className="w-100 smallimage product-sm-img" src={image_one} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnClick} className="w-100 smallimage product-sm-img" src={image_two} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnClick} className="w-100 smallimage" src={image_three} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnClick} className="w-100 smallimage product-sm-img" src={image_four} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">{short_description}</h6>


                                    <div>
                                        {this.PriceOption(price, special_price)}
                                    </div>



                                    <h6 className="mt-2">Category: <b>{category}</b></h6>
                                    <h6 className="mt-2">Sub-Category: <b>{subcategory}</b></h6>
                                    <h6 className="mt-2">Brand: <b>{brand}</b></h6>
                                    <h6 className="mt-2">Product Code: <b>{product_code}</b></h6>

                                    <div className={ColorDiv}>
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select className="form-control form-select">
                                            {ColorOption}
                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select className="form-control form-select">
                                            {SizeOption}
                                        </select>
                                    </div>
                                    
                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select className="form-control form-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    <p>{long_description}</p>
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default ProductDetails
