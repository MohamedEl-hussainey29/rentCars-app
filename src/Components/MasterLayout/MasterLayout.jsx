import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
      <div className='container-fluid mt-0 p-0'>
        <div className="row g-0">
            <div className="col-md-12">
                <Outlet/>
            </div>
        </div>

      </div>
    </>
  )
}
