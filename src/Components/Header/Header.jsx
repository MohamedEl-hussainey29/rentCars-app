import React from 'react'
import Navbar from '../Navbar/Navbar'
import header from './Header.module.css'
import { images } from '../../assets/images'

export default function Header() {
  return (
    <>
        <div className="mb-5">
          <div className="container-fluid p-0 overflow-hidden">
          <div className="row g-0">
            <div className="col-md-12">
        <div className={header.header}>
            <div>
              <Navbar/>
            </div>
            <div className="header_img_container">
              <div className="container-fluid p-0 m-0">
              <div className="row mt-md-5 mt-1">
                  <div className="col-md-4 mt-md-5 mt-md-1 pt-md-5 order-md-1 order-2">
                      <div className={`${header.headerText} text-center ms-md-5 mx-0`}>
                        <h1 className={`${header.header_heading} fw-md-bolder fw-bold`}>Find, book and rent a car <span className={header.header_span}>Easily</span></h1>
                        <p className="header_p text-muted fw-md-bold fs-md-4 fs-6 pe-md-5">Get a car wherever and whenever you need it with your IOS and Android device.</p>

                      </div>
                  </div>
                  <div className="col-md-8 order-md-2 order-1 text-end">
                      <div className='mb-0 pb-0'>
                        <img className={header.header_img} src={images.headerCar} alt="header_img" />
                      </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    </>
  )
}
