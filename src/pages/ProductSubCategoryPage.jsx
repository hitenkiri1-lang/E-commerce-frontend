import React, { Component, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'
import SubCategory from '../components/ProductDetails/SubCategory'


export class ProductSubCategoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Category: props.category,
            SubCategory: props.subcategory,
            ProductData: [],
        };
    }


    componentDidMount() {
        window.scroll(0, 0)
        axios.get(AppURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory))
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

                <SubCategory Category={this.state.Category} SubCategory={this.state.SubCategory} ProductData={this.state.ProductData}></SubCategory>


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

function ProductSubCategoryPageWrapper() {

    const { category, subcategory } = useParams();

    console.log("URL Category:", category);
    console.log("URL SubCategory:", subcategory);

    return (
        <ProductSubCategoryPage
            category={category}
            subcategory={subcategory}
        />
    );
}


export default ProductSubCategoryPageWrapper;
