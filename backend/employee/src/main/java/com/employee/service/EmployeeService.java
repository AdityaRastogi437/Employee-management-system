package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dao.EmployeeRepo;
import com.employee.entities.Employee;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	public Employee addEmployee(Employee employee) {
		
	    Employee emp=employeeRepo.save(employee);
	    return emp;
	}
	
	public Employee updateEmployee(int id,Employee newEmployee) {
		
		return employeeRepo.findById(id)
		.map(employee ->{
			employee.setName(newEmployee.getName());
			employee.setEmail(newEmployee.getEmail());
			employee.setPassword(newEmployee.getPassword());
			employee.setAddress(newEmployee.getAddress());
			employee.setAttendance(newEmployee.getAttendance());
			employee.setSalary(newEmployee.getSalary());
			employee.setCatname(newEmployee.getCatname());
			return employeeRepo.save(employee);
		}).orElseThrow(()->new NotFoundException(id,"employee"));
	}
	
	public String deleteEmployee(int id) {
		if(!employeeRepo.existsById(id)){
			throw new NotFoundException(id, "employee");
		}
		employeeRepo.deleteById(id);
	        return "User with the id " + id + " has been successfully deleted.";

	}
	
	public List<Employee> getAllEmployee()
	{
		List<Employee> emp=(List<Employee>)employeeRepo.findAll();
		return emp;
	}
	
	public Employee getById(int id) {
		
		return employeeRepo.findById(id)
		.orElseThrow(()->new NotFoundException(id,"employee"));
	}
	
	public long getEmployee() {
		long emp=employeeRepo.count();
		return emp;
	}
	
	public int totalSalary() {
		int emp=employeeRepo.totalSalary();
		return emp;
	}
	
	public int averageAttendance() {
		int emp=employeeRepo.averageAttendance();
		return emp;
	}
}
