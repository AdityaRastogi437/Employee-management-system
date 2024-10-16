import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employee from './components/Employee'
import Category from './components/Category'
import AddCategory from './components/AddCategory'
import EditCategory from './components/EditCategory'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      <Route path='/dashboard/category' element={<Category/>}></Route>
      <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
      <Route path='/dashboard/edit_category/:id' element={<EditCategory/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      </Route>
      </Routes>

    </>
  )
}
