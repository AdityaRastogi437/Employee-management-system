import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import url from '../api/bootApi';
import axios from 'axios';

export default function EditCategory() {
    const navigator=useNavigate();
    const {id}=useParams();
    const [category,setCategory]=useState({
     name:''
    });


    const getData= ()=>{
      
            axios.get(`${url}/categories/${id}`).then(response=>{

                setCategory(response.data);
                
                
            },
            error=>{
                console.log(error);
                
            }
        )
            
     
       }

       useEffect(()=>{
        getData();
       },[])

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory(prev => ({ ...prev, [name]: value }));
    };


    const handleSubmit=()=>{
   
        axios.put(`${url}/category/${id}`,category).then((response)=>{
            if(response.data){
                Swal.fire({
                    text:"Category name changed",
                    icon:"success"
                  });
                  navigator("/dashboard/category");
            }
              
        }).catch(error=>{

            console.log(error);
            
        })

    }

  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
    <div className="p-3 rounded w-25 border  ">
        <h2 className='text-center mb-4' >Edit Category</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="category"><strong>Category:</strong></label>
            <input type="text" name='name'  placeholder='Enter Category' className='form-control rounded-0' value={category.name}
            onChange={handleChange}  />
          </div>
          <button className='btn btn-primary w-100 rounded mb-2'>Edit Category</button>
        </form>
    </div>
</div>
  )
}
