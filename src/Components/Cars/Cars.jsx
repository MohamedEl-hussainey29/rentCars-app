import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Cars() {
  return (
    <>
    <div className="container-fluid">
      <Outlet/>
    </div>
    </>
  )
}
