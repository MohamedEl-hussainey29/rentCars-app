import React from 'react'
import notFound from './NotFound.module.css'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'

export default function NotFound() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className={`${notFound.bg} d-flex flex-column justify-content-center align-items-center gap-4`}>

  <img 
    src={images.nfImage} 
    alt="NotFound"
    className="img-fluid"
    style={{ maxWidth: "400px" }}
  />

  <Link 
    className="btn btn-primary text-white text-decoration-none"
    to="/home"
  >
    Back to Home
  </Link>

</div>
        </div>
      </div>
    </div>
  )
}