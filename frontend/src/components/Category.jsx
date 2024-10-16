import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import url from '../api/bootApi'
import axios from 'axios'

export default function Category() {

  const [category,setCategory]=useState([])
  const navigate=useNavigate();
  const getCategoryData=()=>{

    axios.get(`${url}/category`).then(response=>{
      setCategory(response.data);
      
      
    },
    error=>{
      console.log(error);
    }
        
   )
  }

  const deleteCategory=(id)=>{

    axios.delete(`${url}/category/${id}`).then(response=>{
      console.log(response.data);
      // getCategoryData();
      
    },
    error=>{
      console.log(error);
      
    })
  }

  const editCategory=(id)=>{
    navigate(`/dashboard/edit_category/${id}`);
  }

  useEffect(()=>{
    getCategoryData();
  },[])

  return (
  <div className='px-5 mt-3 vh-100'>
    <div className='d-flex justify-content-center'>
      <h3>Category List</h3>
    </div>
    <Link to="/dashboard/add_category" className="btn btn-success" >Add Category</Link>
    <table className='table table-success mt-4'>
      <thead className=' table-info'>
        <tr>
          <th className='fs-5 text-center'>sr.no:</th>
          <th className='fs-5 text-center'>Name:</th>
          <th className='fs-5 text-center'>Actions:</th>
        </tr>
      </thead>
      <tbody>
        {
            category.map((value,index)=>{
            return (  <tr key={value.id}>
                <td className='text-center' style={{fontSize:"20px"}}>{index+1}</td>
                <td className='text-center' style={{fontSize:"20px"}} >{value.name}</td>
                <td className='d-flex justify-content-center' ><button type='button' className='btn btn-warning mx-4' onClick={()=>editCategory(value.id)} >Edit</button>
                <button type='button' className='btn btn-danger' onClick={()=>deleteCategory(value.id)}>Delete</button></td>
              </tr>
            )})
        }
      </tbody>
    </table>
  </div>

   
  )
}
