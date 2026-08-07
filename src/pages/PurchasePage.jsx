import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import Purchase from '../components/others/Purchase'    

export class PurchasePage extends Component {
    componentDidMount() {
    window.scroll(0, 0)
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
        
        
                        
                        <Purchase></Purchase>
        
        
        
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

export default PurchasePage
