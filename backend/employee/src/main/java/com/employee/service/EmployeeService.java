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
	
	public Employee updateEmployee(int id,Employee employee) {
		
		employee.setId(id);
		Employee emp=employeeRepo.save(employee);
		return emp;
	}
	
	public void deleteEmployee(int id) {
		  employeeRepo.deleteById(id);
	}
	
	public List<Employee> getAllEmployee()
	{
		List<Employee> emp=(List<Employee>)employeeRepo.findAll();
		return emp;
	}
	
	public Employee getById(int id) {
		Employee employee=null;
		try
		{
			employee=this.employeeRepo.findById(id);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return employee;
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
