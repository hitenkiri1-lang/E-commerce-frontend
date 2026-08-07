import React, { Component,Fragment} from 'react'
import FeaturedProduct from '../components/home/FeaturedProduct'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import AppURL from '../api/AppURL'
import axios from 'axios'

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails =() => {
    axios.get(AppURL.VisitorDetails).then().catch()
  }

  render() {
    return (
      <Fragment>
        <div className='Desktop'>
          <NavmenuDesktop></NavmenuDesktop>
          <HomeTop></HomeTop>
        </div>

        <div className='Mobile'>
          <NavmenuMobile></NavmenuMobile>
          <HomeTopMobile></HomeTopMobile>
        </div>
        <FeaturedProduct></FeaturedProduct>
        <NewArrival></NewArrival>
        <Categories></Categories>
        <Collection></Collection>
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

export default HomePage
