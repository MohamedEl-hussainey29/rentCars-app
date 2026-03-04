import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images';
import axios from 'axios';
import deals from '../Deals/Deals.module.css'
import Car from '../Car/Car';

export default function CarsList() {

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

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);


  const getPaginationGroup = () => {
  const pages = [];

  const showPages = 2; // how many pages before and after current

  const startPage = Math.max(2, currentPage - showPages);
  const endPage = Math.min(totalPages - 1, currentPage + showPages);

  pages.push(1); // always show first page

  if (startPage > 2) {
    pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages); // always show last page
  }

  return pages;
};

  return (
    <>
      <div className="container">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to='/home'>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                cars
              </li>
            </ol>
          </nav>
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
            {currentCars.map((car) => (
              <Car key={car.id} carInfo={car} />
            ))}
          </div>
          <div className="carsPages">
              <nav aria-label="Page navigation" className="my-4">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                      Previous
                    </button>
                  </li>
                  {getPaginationGroup().map((page, index) =>
                    page === "..." ? (
                      <li key={index} className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    ) : (
                      <li key={index} className={`page-item ${currentPage === page ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(page)}>
                          {page}
                        </button>
                      </li>
                    )
                  )}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
          </div>
      </div>
    </>
  )
}
