import React from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'

export default function Car(props) {
    let {carInfo} = props //destruction
  return (
    <>
      <div className="col-md-3 mt-3" key={carInfo?.id}>
            <div className="card">
              <img src={carInfo?.assignedImage} className="card-img-top w-75 m-auto d-block my-2" alt="car-image"/>
              <div className="card-body">
                <h5 className="card-title fs-3">{carInfo?.car_model}</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={images.starRate} alt="review"/>
                    <small className="text-muted">(1345 reviews)</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between flex-column">
                    <p className="card-text text-nowrap d-flex align-items-start">
                    <img src={images.user} alt="user"/>
                    <small className="text-muted"> 2 Passanger</small>
                    </p>
                    <p className="card-text text-nowrap d-flex align-items-start">
                      <i className="fa-solid fa-calendar-days me-2"></i>
                      <small className="text-muted"> 2021</small>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between flex-column">
                    <p className="card-text text-nowrap d-flex align-items-start">
                      <img src={images.snow} className="w-100" alt="ac"/>
                      <small className="text-muted"> Air conditioning </small>
                    </p>
                    <p className="card-text text-nowrap d-flex align-items-start me-3">
                      <img src={images.automatic} alt="frame"/>
                      <small className="text-muted"> Automatic </small>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="text-muted">Price</p>
                  <div className="d-flex">
                    <h6>{carInfo?.price}</h6> / <p className="text-muted">day</p>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-primary w-100">
                    <Link className="text-white text-decoration-none" to={`/home/all-vehicles/${carInfo?.id}`}>
                      View details <img src={images.detailsArrow} alt="arrowRight" className="ms-2"/>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
