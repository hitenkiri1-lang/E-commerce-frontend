import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import axios from 'axios';
import AppURL from '../api/AppURL';
import NavmenuDesktop from '../components/common/NavmenuDesktop';

export class AppRoute extends Component {

  constructor() {
    super();
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
        axios.get(AppURL.UserData)
            .then(response => {
                this.setUser(response.data );
            })
            .catch(error => { });
    }

  setUser = (user) => {
    this.setState({ user : user });
  }

  render() {
    return (
      <Fragment>
        <NavmenuDesktop user={this.state.user} setUser={this.setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          


          <Route path="/login" element={<UserLoginPage user={this.state.user} setUser={this.setUser} />} />
          <Route path="/register" element={<RegisterPage user={this.state.user} setUser={this.setUser} />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage/>} />
          <Route path="/reset/:id" element={<ResetPasswordPage/>} />
          <Route path="/profile" element={<ProfilePage user={this.state.user} setUser={this.setUser}/>} />


          <Route path="/contact" element={<ContactPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/about" element={<AboutPage />} />


          <Route path="/productdetails/:code" element={<ProductDetailsPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/productcategory/:category" element={<ProductCategoryPage />} />
          <Route path="/productsubcategory/:category/:subcategory" element={<ProductSubCategoryPage/>} />

          <Route path="/productbysearch/:searchKey" element={<SearchPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;