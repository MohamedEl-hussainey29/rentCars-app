import React from 'react'
import choose from '../Choose/Choose.module.css'
import deals from '../Deals/Deals.module.css'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'

export default function CarDetails() {
  return (
    <>

        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="row">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mt-md-5 mt-2 mx-md-5 mx-1">
                    <li className="breadcrumb-item fs-5">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item fs-5">
                      <Link to="/home/all-vehicles">Cars</Link>
                    </li>
                    <li className="breadcrumb-item active fs-5" aria-current="page">Car Details</li>
                    <li className="breadcrumb-item active fs-5" aria-current="page">
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        <div className={`row ${choose.choose_bg}`}>
            <div className="col-md-6 ps-0">
              <div className="d-flex justify-content-start align-items-center">
                <img src={images.chooseCar} alt="" className={`d-md-block d-none ${choose.carImg}`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className={`rounded-2 text-uppercase ${deals.popularBtn}`}>why choose us</div>
              </div>
              <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-center">
                <div className="my-3 text-capitalize">
                  <h2>We offer the best experience with our rental deals</h2>
                </div>
              </div>
              <div className="row">
                <div className="col fs-5">
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={images.user} alt="user" className='me-md-3 ms-2 mt-4' />
                    <small className='mt-3 text-muted text-center'>2 Passanger</small>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={images.snow} alt="" className='me-md-3 ms-2 mt-4' />
                    <small className='mt-3 text-muted text-center'>Air Conditioning</small>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={images.automatic} alt="" className='me-md-3 ms-2 mt-4' />
                    <small className='mt-3 text-muted text-center'>CVT</small>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={images.doors} alt="" className='me-md-3 ms-2 mt-4' />
                    <small className='mt-3 text-muted text-center'>Doors</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
