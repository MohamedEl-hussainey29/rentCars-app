import React from 'react'
import footer from '../Footer/Footer.module.css'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className={`${footer.footer} px-md-5`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 my-5">
            <div className="d-flex justify-content-between">
              <div>
                <img src={images.logoFooter} alt="" className={footer.logo}/>
                <div className="d-flex justify-content-start align-items-center my-3">
                  <div>
                    <img src={images.loctaion} alt="loc" />
                  </div>
                  <div className="d-flex flex-column mx-2 text-white">
                    <small>25566 Hc 1,Glenallen,<br/>Alaska, 99588, USA</small>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center my-3">
                  <div>
                    <img src={images.phone} alt="call" />
                  </div>
                  <div className="d-flex flex-column mx-2 text-white">
                    <small>+603 4784 273 12</small>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center my-3">
                  <div>
                    <img src={images.sms} alt="sms" />
                  </div>
                  <div className="d-flex flex-column mx-2 text-white">
                    <small>rentcars@gmail.com</small>
                  </div>
                </div>
              </div>
              <div className="text-white mt-3">
                <div className="h6 text-capitalize mb-4 ">our products</div>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Carrers</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Cars</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>packages</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Priceline</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 my-md-5 mb-5">
            <div className="d-flex justify-content-around">
              <div className="text-white mt-3">
                <div className="h6 text-capitalize mb-4 ">About Rent Cars</div>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Why Choose Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Our Story</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Investor Relations</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Press Center</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Advertise</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white mt-3">
                <div className="h6 text-capitalize mb-4 ">resources</div>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Download</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Help Center</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Guides</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Partner Network</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Cruises</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link text-white p-0' to='#'>Developer</Link>
                  </li>
                </ul>
              </div>
              <div className="text-white mt-3">
                <div className="h6 text-capitalize mb-4 ">follow us</div>
                <div className="d-flex">
                  <img src={images.facebook} alt="face" className='me-1'/>
                  <img src={images.instagram} alt="insta" className='me-1'/>
                  <img src={images.youtube} alt="youtube" className='me-1'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-white">
          <hr className={footer.line}/>
          <p className="mt-md-5 mt-3 mb-4">Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </div>
    </>
  )
}
