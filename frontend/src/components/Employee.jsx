import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import url from '../api/bootApi';
import axios from 'axios';

export default function Employee() {
  
    const [employee, setEmployee] = useState([]);
     const navigator=useNavigate();
  
   
   const getData= ()=>{

    axios
        .get(`${url}/employee`)
        .then((result) => {
          
             setEmployee(result.data);
        })
        .catch((err) => console.log(err));
   }
   
   
   
   
   
    useEffect(() => {
      getData();
    }, [getData]);
   
   
   
   
    const handleDelete = (id) => {
      axios.delete(`${url}/employee/${id}`)
      .then(result => {
         console.log(result);
       
         
      }).catch((error)=>{
        console.log(error);
      
      })
      getData();
    } 


    const handleEdit=(id)=>{
     navigator(`/dashboard/edit_employee/${id}`);
    }
    return (
      <div className="px-5 mt-3 vh-100">
        <div className="d-flex justify-content-center">
          <h3 >Employee List</h3>
        </div>
        <Link to="/dashboard/add_employee" className="btn btn-success">
          Add Employee
        </Link>
        <div className="mt-3">
          <table className="table ">
            <thead className='table-warning'>
              <tr >
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Attendance</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='table-primary'>
              { employee.map((e,index) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.salary}</td>
                  <td>{`${e.attendance}%`}</td>
                  <td>{e.catname}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={()=>handleEdit(e.id)} >  Edit </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(e.id)} >Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}
