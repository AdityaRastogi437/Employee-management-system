import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, Outlet } from 'react-router-dom';
export default function Dashboard() {
 
    

  return (
    <div className='container-fluid p-0 m-0 '>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid ">
    <Link className="navbar-brand">EMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbarNav nav nav-pills">
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
        </li>
        <li className="nav-item px-2">
        <Link className="nav-link active " aria-current="page" to="/dashboard/employee">Manage Employee</Link>
        </li>
        <li className="nav-item px-2">
        <Link className="nav-link active " aria-current="page" to="/dashboard/category">Category</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>


<div className="p-2 d-flex justify-content-center shadow">
                <h5  className='heading' >Employee Management System</h5>
            </div>
            <Outlet/>

    <div className="footer p-2 d-flex justify-content-center bg-primary position-sticky bottom-0  vw-100">
     <h5 className="text-white">@designed by aditya </h5>
    </div>
    </div>
  )
}
