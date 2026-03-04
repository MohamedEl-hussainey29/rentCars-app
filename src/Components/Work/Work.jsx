import React from 'react'
import work from '../Deals/Deals.module.css'
import { images } from '../../assets/images'
import BrandSlider from '../Sliders/BrandSlider'

export default function Work() {
    const brands=[images.brand1,images.brand2,images.brand3,images.brand4,images.brand5]
  return (
    <>
      <div className="row my-5">
        <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
                <div className={`rounded-2 text-uppercase ${work.popularBtn}`}>how it work</div>
            </div>
        </div>
        <div className="col-12 text-center">
            <h2 className={`text-capitalize ${work.popularTitle}`}>Rent with following 3 working steps</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex flex-column align-items-center px-4 mx-4 my-2">
                    <div>
                        <img src={images.carIcon} alt="choose location"/>
                    </div>
                    <h3 className="my-3">Choose location</h3>
                    <small className="text-muted text-center">Choose your and find your best car</small>
                </div>
                <div className="d-flex flex-column align-items-center px-4 mx-4 my-2">
                    <div>
                        <img src={images.locationIcon} alt="choose location"/>
                    </div>
                    <h3 className="my-3">Pick-up date</h3>
                    <small className="text-muted text-center">Select your pick up date and time to book your car</small>
                </div>
                <div className="d-flex flex-column align-items-center px-4 mx-4 my-2">
                    <div>
                        <img src={images.carIcon} alt="choose location"/>
                    </div>
                    <h3 className="my-3">Book your car</h3>
                    <small className="text-muted text-center">Book your car and we will deliver it directly to you</small>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col my-5">
            <BrandSlider brandImgs={brands}/>
        </div>
      </div>
    </>
  )
}
