import React, { useEffect, useState } from 'react'
import deals from './Deals.module.css'
import axios from 'axios'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import Car from '../Car/Car'

export default function Deals() {

  const [search, setSearch] = useState("")
  const [cars , setCars] = useState([])
  const carImages = [images.car1 , images.car2 , images.car3]


  let getCars = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      const rawCars = response.data.cars;

      const carsWithImages = rawCars.map((car) => ({
        ...car,
        assignedImage: carImages[Math.floor(Math.random() * carImages.length)]
      }));
      
      setCars(carsWithImages);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(()=>{
    //mounting phase
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCars()
  },[])

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
      <div className="row">
        {cars.slice(0,4).map((car)=>(
            <Car carInfo={car}/>
        ))}
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