import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import url from '../api/bootApi';

export default function EditEmployee() {
    const [category,setCategory]=useState([])
    const navigate=useNavigate();
     const {id}=useParams();
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

      const getEmployeeData=()=>{
        axios.get(`${url}/employees/${id}`).then((response)=>{
            setEmployee(response.data);
            
        }).catch((error)=>{
            console.log(error);
            
        })
      }





      useEffect(()=>{
        getCategoryData();
        getEmployeeData();
      },[])


      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };
    
     
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`${url}/employee/${id}`,employee).then((response)=>{
        console.log(response.data);   
        },
      (error)=>{
        console.log(error);
        
      })
        console.log(employee);
        
      navigate("/dashboard/employee");
      }



      

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 '>
    <div className="p-3 rounded w-50 border ">
        <h2 className='text-center mb-4 ' >Edit Employee</h2>
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
            <select name='catname' id='category' className='form-select mt-2' onChange={handleChange}  defaultValue={employee.catname} required >
               <option disabled >{employee.catname}</option>
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


          <button className='btn btn-primary w-100 rounded col-12 mb-2'>Edit Employee</button>
        </form>
    </div>
</div>
  )
}
