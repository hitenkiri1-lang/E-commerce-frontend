import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import axios from 'axios'
import AppURL from '../api/AppURL'
import SliderLoading from '../components/PlaceHolder/SliderLoading'
import { useParams } from 'react-router-dom'

export class ProductDetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            code: props.code,
            ProductData: [],
            isLoading: "",
            mainDiv: "d-none"
        };
    }


    componentDidMount() {
        window.scroll(0, 0)

        axios.get(AppURL.ProductDetails(this.state.code))
            .then(response => {
                this.setState({
                    ProductData: response.data, isLoading: "d-none",
                    mainDiv: ""
                });
            })
            .catch(error => {console.log("API Error:", error); })
    }
    render() {


        if (this.state.mainDiv == "d-none") {
            return (
                <Fragment>
                    <div className='Desktop'>
                        <NavmenuDesktop></NavmenuDesktop>
                    </div>

                    <div className='Mobile'>
                        <NavmenuMobile></NavmenuMobile>
                    </div>

                    <SliderLoading isLoading={this.state.isLoading}></SliderLoading>


                    {/* <ProductDetails data={this.state.ProductData}></ProductDetails>
                <SuggestedProduct></SuggestedProduct> */}



                    <div className='Desktop'>
                        <FooterDesktop></FooterDesktop>
                    </div>
                    <div className='Mobile'>
                        <FooterMobile></FooterMobile>
                    </div>

                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <div className='Desktop'>
                        <NavmenuDesktop></NavmenuDesktop>
                    </div>

                    <div className='Mobile'>
                        <NavmenuMobile></NavmenuMobile>
                    </div>

                    {/* <SliderLoading isLoading={this.state.isLoading}></SliderLoading> */}


                    <ProductDetails data={this.state.ProductData}></ProductDetails>
                    



                    <div className='Desktop'>
                        <FooterDesktop></FooterDesktop>
                    </div>
                    <div className='Mobile'>
                        <FooterMobile></FooterMobile>
                    </div>

                </Fragment>
            )
        }

    }
}

function ProductDetailsPageWrapper() {
    const { code } = useParams();

    return <ProductDetailsPage code={code} />;
}

export default ProductDetailsPageWrapper;
