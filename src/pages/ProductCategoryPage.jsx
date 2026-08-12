import React, { Component, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'
import AppURL from '../api/AppURL'


export class ProductCategoryPage extends Component {

    constructor(props) {
    super(props);

    this.state = {
        Category: props.category,
        ProductData: [],
    };
}


    componentDidMount() {
        window.scroll(0, 0)
        axios.get(AppURL.ProductListByCategory(this.state.Category))
      .then(response => {
        this.setState({ ProductData: response.data });
      })
      .catch(error => { })
    }

    render() {
        return (
            <Fragment>
                <div className='Desktop'>
                    <NavmenuDesktop></NavmenuDesktop>
                </div>

                <div className='Mobile'>
                    <NavmenuMobile></NavmenuMobile>
                </div>


                <Category Category={this.state.Category} ProductData={this.state.ProductData}></Category>



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
function ProductCategoryPageWrapper() {

    const { category } = useParams()

    console.log("URL category:", category)

    return (
        <ProductCategoryPage
            category={category}
        />
    )
}


export default ProductCategoryPageWrapper
