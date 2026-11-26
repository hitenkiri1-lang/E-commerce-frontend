import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'
import SearchList from '../components/ProductDetails/SearchList'
import { useParams } from 'react-router-dom';


class SearchPage extends Component {

  constructor(props) {
          super(props);
  
          this.state = {
              SearchKey: props.searchKey,
              ProductData: [],
          };
      }
  
  
      componentDidMount() {
          window.scroll(0, 0)
          axios.get(AppURL.ProductBySearch(this.state.SearchKey))
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
      
      
                      <SearchList SearchKey={this.state.SearchKey} ProductData={this.state.ProductData}></SearchList>
      
    
      
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

function SearchPageWrapper() {
    const { searchKey } = useParams();
    return <SearchPage searchKey={searchKey} />;
}

export default SearchPageWrapper;