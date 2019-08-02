import React from 'react'
import {Route } from 'react-router-dom'
import Problem from './components/problem'
import Solution from './components/solution'
import Blogs from './components/blogs'
import Navbar from './components/navbar'
import Recycle from './components/recycle'
import Footer from './components/footer'


export default class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/why-should-we-recycle" component={Problem} />
        <Route exact path="/home" component={Solution} />
        <Route exact path="/" component={Solution} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/what-can-be-recycled" component={Recycle} />
        <Footer />
      </>

    )
  }
}
