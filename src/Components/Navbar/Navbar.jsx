import React from 'react'
import { images } from '../../assets/images'
import navbar from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className={navbar.navLogo} src={images.navLogo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <div></div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${navbar.navItem}`} href="#">Become a rintal</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navbar.navItem}`} href="#">Rinatal deals</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navbar.navItem}`} href="#">How it work</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${navbar.navItem}`} href="#">Why choose us</a>
              </li>
            </ul>
            <div className="headerBtns">
              <button className="btn btn-transparent fs-5 fw-normal">Sign in</button>
              <button className="btn btn-primary fs-5 fw-normal">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}