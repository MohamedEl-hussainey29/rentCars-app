import React from 'react'
import test from './Testimonials.module.css'
import deals from '../Deals/Deals.module.css'
import TestimonialsSlider from '../Sliders/TestimonialsSlider'

export default function Testimonials() {
  return (
    <>
      <div className='container-fluid'>
        <div className={`row my-5 pb-5 ${test.testimonials}`}>
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className={`rounded-2 text-uppercase ${deals.popularBtn}`}>Testimonials</div>
            </div>
          </div>
          <div className="col-12 text-center">
              <h2 className={`text-capitalize ${deals.popularTitle}`}>what people say about us?</h2>
          </div>
          <div className={`col-12 ${test.sliderContainer}`}>
            <TestimonialsSlider/>
          </div>
        </div>
      </div>
    </>
  )
}
