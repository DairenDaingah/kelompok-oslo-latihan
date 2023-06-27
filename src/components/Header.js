import React from 'react'

function Header() {
  return (
    <div>  {/*header*/}
    <header className="main-header clearfix" role="header">
      <div className="logo">
        <a href="#"><em>Grad</em> School</a>
      </div>
      <a href="#menu" className="menu-link"><i className="fa fa-bars" /></a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li><a href="#section1">Home</a></li>
          <li className="has-submenu"><a href="#section2">About Us</a>
            <ul className="sub-menu">
              <li><a href="#section2">Who we are?</a></li>
              <li><a href="#section3">What we do?</a></li>
              <li><a href="#section3">How it works?</a></li>
              <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li>
            </ul>
          </li>
          <li><a href="#section4">Courses</a></li>
          {/* <li><a href="#section5">Video</a></li> */}
          <li><a href="#section6">Contact</a></li>
          <li><a href="https://templatemo.com" className="external">External</a></li>
        </ul>
      </nav>
    </header></div>
  )
}

export default Header