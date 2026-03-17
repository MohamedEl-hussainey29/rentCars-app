import { Link } from 'react-router-dom'
import { images } from '../../assets/images';
import deals from '../Deals/Deals.module.css'
import Car from '../Car/Car';
import useCarTransform  from '../../hooks/useCarTransform';
import useFetch from '../../hooks/useFetch';
import usePagination from '../../hooks/usePagination';

const API = "https://myfakeapi.com/api/cars/";

export default function CarsList() {

  const transformedCars = useCarTransform(images)
  const {data: cars , loading , error} = useFetch(API , transformedCars)

  const {
    currentPage,
    setCurrentPage,
    currentItems: currentCars,
    totalPages,
    getPaginationGroup} = usePagination(cars, 16);

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

          <div className="row" style={{ minHeight: "300px" }}>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center w-100">
                <div className="spinner-grow text-primary" role="status"></div>
              </div>
            ) : error ? (
              <div className="text-center w-100">
                <p>{error}</p>
              </div>
            ) : (
              currentCars.map((car) => (
                <Car key={car.id} carInfo={car} />
              ))
            )}
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
