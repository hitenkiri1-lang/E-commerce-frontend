import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import { Link } from 'react-router-dom'
import MegaMenuAll from '../home/MegaMenuAll'
import { Navigate } from 'react-router-dom';


export class NavmenuDesktop extends Component {

  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      SearchKey: "",
      SearchRedirectStatus: false
    }
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SearchOnClick = this.SearchOnClick.bind(this);
    this.SearchRedirect = this.SearchRedirect.bind(this);
  }

  SearchOnChange(event)
  {
    let SearchKey = event.target.value;
    // alert(SearchKey);
    this.setState({SearchKey: SearchKey});

  }
  SearchOnClick(){
    if(this.state.SearchKey.length >= 2)
    {
      this.setState({SearchRedirectStatus: true});
    }
  }

  SearchRedirect()
  {
    if(this.state.SearchRedirectStatus === true)
    {
      return(
        <Navigate to={"/productbysearch/" + this.state.SearchKey} />
      )
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if (SideNavState === "sideNavOpen") {
      this.setState({ SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose" })
    }
    else {
      this.setState({ SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen" })
    }
  }
  render() {
    return (
      <Fragment>
        <div className='TopSectionDown'>
          <Navbar fixed={"top"} className="navbar">
            <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row className="w-100 align-items-center">
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img onClick={this.MenuBarClickHandler} src={Bars} alt="bars" className="bar-img" />
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="nav-logo" />
                  </Link>
                </Col>

                {/* search bar */}

                <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input onChange={this.SearchOnChange} className="form-control" type="text" placeholder="Search Your Product" />
                    <Button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fas fa-search"></i></Button>
                  </div>
                </Col>

                <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">5</span></sup>
                  </Link>
                  <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>
                  </Link>
                  <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                  <Link to="/login" className="h4 btn">Login</Link>
                  <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> 3 Items</Link>
                </Col>
              </Row>
              {this.SearchRedirect()}
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll></MegaMenuAll>
        </div>

        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div>
      </Fragment>
    )
  }
}

export default NavmenuDesktop
