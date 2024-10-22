import axios from 'axios';
import React, { useEffect, useState } from 'react'
import url from '../api/bootApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddEmployee() {

    const [category,setCategory]=useState([])
    const navigate=useNavigate();
    const [employee,setEmployee]=useState({
      name:'',
      email:'',
      password:'',
      salary:'',
      address:'',
      attendance:'',
      catname:'',

    });

    const getCategoryData= ()=>{

        axios.get(`${url}/category`).then(response=>{

          
          
          setCategory(response.data);
          
           
          
        },
        error=>{
          console.log(error);
        }  
       )
      }





      useEffect(()=>{
        getCategoryData();
      },[])


      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };
    
     
      const handleSubmit=(e)=>{
        e.preventDefault();
        
        axios.post(`${url}/employee/add`,employee).then((response)=>{
          if(response.data){
            Swal.fire({
              text:"user Added",
              icon:"success"
            });
          }
          
        
        },
      (error)=>{
        console.log(error);
        
      })
      
      
      

      navigate("/dashboard/employee");
      }



      

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 '>
    <div className="p-3 rounded w-50 border ">
        <h2 className='text-center mb-4 ' >Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className='col-12 mb-3  '>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="text" name='name'  placeholder='Enter Name' id='name' className='form-control rounded' value={employee.name} 
            onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" name='email'  placeholder='Enter Email' id='email' className='form-control rounded' value={employee.email} 
             onChange={handleChange}  required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="name"><strong>Password:</strong></label>
            <input type="password" name='password'  placeholder='Enter Password' id='password' className='form-control rounded' value={employee.password} 
             onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="salary"><strong>Salary:</strong></label>
            <input type="text" name='salary'  placeholder='Enter Salary' id='salary' className='form-control rounded' value={employee.salary} 
             onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="address"><strong>Address:</strong></label>
            <input type="text" name='address'  placeholder='Enter Address' id='address' className='form-control rounded-0' value={employee.address} 
             onChange={handleChange} required/>
          </div>

          <div className='col-12 mb-3 '>
            <label htmlFor="category"><strong>Department:</strong></label>
            <select name='category' id='category' className='form-select mt-2'  onChange={(e) => setEmployee({...employee, catname: e.target.value})}  required >
              <option value=''>Department</option>
                {  
                    category.map((c,index)=>{
                    return <option  key={index} value={c.name}  >{c.name}</option>
                    })
                }
            </select>
          </div>
          
          <div className='col-12 mb-3 '>
            <label htmlFor="attendance"><strong>Attendance:</strong></label>
            <input type="number" name='attendance'  placeholder='Enter Attendance' id='attendance' className='form-control rounded' value={employee.attendance} 
             onChange={handleChange} required/>
          </div>


          <button className='btn btn-primary w-100 rounded col-12 mb-2'>Add Employee</button>
        </form>
    </div>
</div>
  )
}
