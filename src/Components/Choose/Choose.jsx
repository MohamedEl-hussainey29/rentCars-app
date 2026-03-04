import React from 'react'
import choose from './Choose.module.css'
import { images } from '../../assets/images'
import deals from '../Deals/Deals.module.css'

export default function Choose() {
  return (
    <>
      <div className='container-fluid'>
        <div className={`row ${choose.choose_bg}`}>
            <div className="col-md-6 ps-0">
              <div className="d-felx justify-content-center align-items-center">
                <img src={images.chooseCar} alt="" className={`d-md-block d-none ${choose.carImg}`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className={`rounded-2 text-uppercase ${deals.popularBtn}`}>why choose us</div>
              </div>
              <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-cnter">
                <div className="my-3 text-capitalize">
                  <h2>We offer the best experience with our rental deals</h2>
                </div>
              </div>
              <div className="container-fluid">
              <div className="row g-0">
                <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                  <img className="me-md-3 ms-2 mt-4 _choose_us_icon_1k48d_1" src={images.userChoose} alt="choose location"/>
                  <div className=" mx-4">
                    <h6 className="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                    <small className="my-0 text-muted text-center">Find a lower price? We'll refund you 100% of the difference.</small>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                  <img className="me-md-3 ms-2 mt-4 _choose_us_icon_1k48d_1" src={images.userChoose} alt="choose location"/>
                  <div className=" mx-4">
                    <h6 className="fs-md-6 fs-4 my-0">24 hour car delivery</h6>
                    <small className="my-0 text-muted text-center">Book your car anytime and we will deliver it directly to you.</small>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                  <img className="me-md-3 ms-2 mt-4 _choose_us_icon_1k48d_1" src={images.message} alt="choose location"/>
                  <div className=" mx-4">
                    <h6 className="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                    <small className="my-0 text-muted text-center">Find a lower price? We'll refund you 100% of the difference.</small>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                  <img className="me-md-3 ms-2 mt-4 _choose_us_icon_1k48d_1" src={images.chat} alt="choose location"/>
                  <div className=" mx-4">
                    <h6 className="fs-md-6 fs-4 my-0">24/7 technical support</h6>
                    <small className="my-0 text-muted text-center">Have a question? Contact Rentcars support any time when you have problem.</small>
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
