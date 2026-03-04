import React from 'react'
import Deals from '../Deals/Deals'
import Choose from '../Choose/Choose'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="container-fluid g-0">
          <Outlet/>
      </div>
    </>
  )
}
