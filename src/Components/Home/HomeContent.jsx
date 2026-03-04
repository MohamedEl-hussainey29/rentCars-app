import React from 'react'
import Header from '../Header/Header'
import Deals from '../Deals/Deals'
import Choose from '../Choose/Choose'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Work from '../Work/Work'
import DownloadApp from '../DownlaodApp/DownloadApp'

export default function HomeContent() {
  return (
    <>
      <div className="container-fluid p-0 mb-0">
        <Header/>
        <div className="container">
          <Deals/>
          <Work/>
        </div>
        <Choose/>
        <Testimonials/>
        <DownloadApp/>
        <Footer/>
      </div>
    </>
  )
}
