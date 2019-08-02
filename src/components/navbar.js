import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './style.css'

class Navbar extends React.Component {
    state = {
      activeMenu: false,
    };

    toggleMenu = () => {
      this.setState({
        activeMenu: !this.state.activeMenu
      })
    }

    render() {
        return (
          <nav className="navbar navstyle" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
              <div className='earth'>
                <span className="duniya">
                </span>
                <span className="logo">
                REWIND
                </span>


              </div>
              </a>
            <a role="button" onClick={this.toggleMenu} className={`navbar-burger burger  ${this.state.activeMenu ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" onClick={this.toggleMenu} className={`navbar-menu nav-animate ${this.state.activeMenu ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <div className="navItems">
                <Link to="/home" className="navbar-item">Home</Link>
              </div>
              <div className="navItems">
                <Link to="/why-should-we-recycle" className="navbar-item">Why Should We Recycle?</Link>
              </div>
              <div className="navItems">
                <Link to="/what-can-be-recycled" className="navbar-item">What Can Be Recycled?</Link>
              </div>
              <div className="navItems">
                <Link to="/blogs" className="navbar-item">Blogs</Link>
              </div>
            </div>
          </div>
        </nav>
      )
    }

  }


  export default Navbar
