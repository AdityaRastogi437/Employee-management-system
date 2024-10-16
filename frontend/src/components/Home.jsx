import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../api/bootApi'

export default function Home() {
  const [employee,setEmployee]=useState('');
  const [salary,setSalary]=useState('');
  const [attendance,setAttendance]=useState('');
  const [totalCategory,setTotalCategory]=useState('');

  const employeeCount=()=>{
    axios.get(`${url}/employee/number`).then((response)=>{
      setEmployee(response.data);
      
    }).catch((error)=>{
      console.log(error);
    })
  }

  const employeeSalary=()=>{
    axios.get(`${url}/employee/salary`).then((response)=>{
      setSalary(response.data);
      
    }).catch((error)=>{
      console.log(error);
    })
  }

  const averageAttendance=()=>{
    axios.get(`${url}/employee/attendance`).then((response)=>{
      setAttendance(response.data);
      
    }).catch((error)=>{
      console.log(error);
    })
  }
  const categoryTotal=()=>{
    axios.get(`${url}/categoryTotal`).then((response)=>{
     setTotalCategory(response.data);
      
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    categoryTotal();
    employeeCount();
     employeeSalary();
     averageAttendance();
  })
  

  return (
    <div className='container vh-100 mt-4'>
      <div className="row">
        <div className="col-lg-4">
        <div className='px-3 pt-2 pb-3 border rounded shadow-sm w-75  '>
        <div className='text-center pb-1'>
          <h4 >Employee</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-evenly'>
          <h5>Total:</h5>
          <h5>{employee}</h5>
        </div>
      </div>
        </div>
     
     <div className="col-lg-4">
     <div className='px-3 pt-2 pb-3 border shadow-sm w-75 rounded   '>
        <div className='text-center pb-1'>
          <h4 >Salary</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-evenly'>
          <h5>Total:</h5>
          <h5>{`$${salary}`}</h5>
        </div>
      </div>
     </div>
      
      <div className="col-lg-4">
      <div className='px-3 pt-2 pb-3 border shadow-sm w-75 rounded  '>
        <div className='text-center pb-1'>
          <h4>Attendance</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-evenly'>
          <h5>Total:</h5>
          <h5>{`${attendance}%`}</h5>
        </div>
      </div>
      </div>
      
      <div className="col-lg-4 mt-4 offset-4">
      <div className='px-3 pt-2 pb-3 border shadow-sm w-75 rounded  '>
        <div className='text-center pb-1'>
          <h4>Department</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-evenly'>
          <h5>Total:</h5>
          <h5>{totalCategory}</h5>
        </div>
      </div>
      </div>

      </div>
      
    </div>
  
  )
}
