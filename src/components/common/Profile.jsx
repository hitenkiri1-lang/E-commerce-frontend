import React, { Component, Fragment } from 'react'

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <h1>User Profile</h1>

        <ul className='list-group'>
          <li className='list-group-item'>Name: John Doe</li>
          <li className='list-group-item'>Email: john.doe@example.com</li>
        </ul>
      </Fragment>
    )
  }
}

export default Profile
