import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import HomeContent from './Components/Home/HomeContent';
import Cars from './Components/Cars/Cars';
import CarsList from './Components/Cars/CarsList';
import CarDetails from './Components/CarDetails/CarDetails';

function App() {

  const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomeContent /> },
      { path: 'home', element: <HomeContent /> },
      {
        path: 'home/all-vehicles',
        element: <Cars />,
        children: [
          { index: true, element: <CarsList /> },
          { path: ':id', element: <CarDetails /> }
        ]
      }
    ]
  }
]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
