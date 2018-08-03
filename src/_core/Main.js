import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Layout from "./Layout";

import Home from '../pages/Home'

import ToDo from "../models/ToDo";

const todo = ToDo.create()

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout >
          <Route exact path='/' render={(props) => (
            <Home {...props} todo={todo} />
          )}/>
            {/* <Route path="/about" name="about" component = {Home} /> */}
          </Layout>
        </div>
      </Router>
    )
  }
}
