import React, { Component,Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './route/AppRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        <AppRoute></AppRoute>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
