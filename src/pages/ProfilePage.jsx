import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavmenuDesktop from '../components/common/NavmenuDesktop'
import NavmenuMobile from '../components/common/NavmenuMobile'
import Profile from '../components/common/Profile'

class ProfilePage extends Component {

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {

        const user = this.props.user;
        return (
            <Fragment>
                <div className='Desktop'>
                    <NavmenuDesktop></NavmenuDesktop>
                </div>

                <div className='Mobile'>
                    <NavmenuMobile></NavmenuMobile>
                </div>



                <Profile user={user}></Profile>


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

export default ProfilePage
