import React, { Component,fragment} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './route/AppRoute'


export class App extends Component {
  render() {
    return (
      <fragment>
        <BrowserRouter>
        <AppRoute></AppRoute>
        </BrowserRouter>
      </fragment>
    )
  }
}

export default App
