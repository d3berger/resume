import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header'
import About from './components/about/about'
import Resume from './components/resume/resume'
// import Portfolio from './components/portfolio/portfolio'
// import Testimonials from  './components/testimonials/testimonials'
// import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Profile from './profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header profile={Profile.header} social={Profile.social} />
        <About profile={Profile.about} />
        <Resume profile={Profile.resume} />
        {/* <Portfolio profile={Profile.portfolio} /> */}
        {/* <Testimonials profile={Profile.testimonials} /> */}
        {/* <Contact profile={Profile.contact} /> */}
        <Footer social={Profile.social} />
      </div>
    )
  }
}

export default App
