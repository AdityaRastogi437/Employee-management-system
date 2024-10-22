import axios from 'axios';
import React, { useState } from 'react'
import url from '../api/bootApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddCategory() {

       const navigator=useNavigate();
       const [category,setCategory]=useState({
        name:''
       });

        


       const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post(`${url}/add`,category).then(response =>{
            if(response.data){
              Swal.fire({
                text:"Category Added",
                icon:"success"
              });
              navigator("/dashboard/category");
            }
            
        } ).catch(error=>{
        console.log(error);
        
      })
    
     
    }

  
    

  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
    <div className="p-3 rounded w-25 border  ">
        <h2 className='text-center mb-4 heading' >Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="category" className='heading'><strong>Category:</strong></label>
            <input type="text" name='category'  placeholder='Enter Category' className='form-control rounded-0' value={category.name}
            onChange={(e)=>{setCategory({name:e.target.value})}} required />
          </div>
          <button className='btn btn-primary w-100 rounded-0 mb-2'>Add Category</button>
        </form>
    </div>
</div>
  )
}
