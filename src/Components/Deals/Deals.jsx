import deals from './Deals.module.css'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import Car from '../Car/Car'
import useFetch from '../../hooks/useFetch'
import useCarTransform  from '../../hooks/useCarTransform'
import { useState } from 'react'

const API = "https://myfakeapi.com/api/cars/";

export default function Deals() {

  const [search, setSearch] = useState("")

  const transformedCars = useCarTransform(images)
  const {data: cars , loading , error} = useFetch(API , transformedCars)

  return (
    <>
      <div className="row">
        <div className="col-12 my-1">
          <div className="input-group mb-3" style={{ width: "90%", margin: "auto" }}>
            <span className="input-group-text">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <input type="text" className="form-control py-2" placeholder="Search by car model" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type="button" className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`rounded-2 text-uppercase ${deals.popularBtn}`}>popular rental deals</div>
          </div>
        </div>
        <div className="col-12 text-center">
          <h2 className={`text-capitalize my-3 ${deals.popularTitle}`}>most popular cars rental deals</h2>
        </div>
      </div>
      <div className="row" style={{ minHeight: "200px" }}>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="spinner-grow text-primary" role="status"></div>
          </div>
        ) : error ? (
          <div className="text-center w-100">
            <p>{error}</p>
          </div>
        ) : (
          cars.slice(0, 4).map((car) => (
            <Car key={car.id} carInfo={car} />
          ))
        )}
      </div>
      <div className="row my-5">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-cnter">
            <Link to='/home/all-vehicles'>
              <button type="button" className={`btn btn-outline-secondary ${deals.showAllBtn}`}>
                Show all vehicles <i className="px-2 fas fa-long-arrow-alt-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}