import React from 'react'
import download from './DownloadApp.module.css'
import { images } from '../../assets/images'

export default function DownloadApp() {
  return (
    <>
        <div className='container-fluid'>
      <div className="row">
        <div className="col-12 ps-0">
            <div className="container">
                <div className="row ">
                    <div className="d-flex justify-content-around align-items-end">
                        <div className={`my-md-5 mt-3 pt-md-5 ${download.bg}`}>
                            <h2 className='text-md-start text-center'>Download Rentcars App for <span className='text-primary'>Free</span></h2>
                            <small className="fs-5 text-md-start text-center d-block">For faster, easier booking and exclusive deals.</small>
                            <div className="d-flex justify-content-start my-4">
                                <img src={images.googlePlay} alt="googleplay" className='mx-1' style={{width: '20%'}}/>
                                <img src={images.appStore} alt="appstore" className='mx-1' style={{width: '20%'}}/>
                            </div>
                            <form>
                                <div className="input-group mb-3" style={{width: '360px'}}>
                                    <input type="text" placeholder="Name" className={`form-control ${download.input}`}/>
                                </div>
                                <div className="input-group mb-3" style={{width: '360px'}}>
                                    <input type="text" placeholder="Phone Number" className={`form-control ${download.input}`}/>
                                </div>
                                <div className="input-group mb-3" style={{width: '360px'}}>
                                    <input type="text" placeholder="Email" className={`form-control ${download.input}`}/>
                                </div>
                                <div className="input-group mb-3 justify-content-center" style={{width: '360px'}}>
                                    <button className="btn btn-primary" type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex justify-content-center align-items-end d-md-block d-none mb-0">
                            <img src={images.mobileApp} alt="" style={{width: '70%'}}/>
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
