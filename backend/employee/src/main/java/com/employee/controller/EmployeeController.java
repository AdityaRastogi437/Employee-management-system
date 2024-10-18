package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entities.Employee;
import com.employee.service.EmployeeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class EmployeeController {


	@Autowired
	private EmployeeService employeeService;

	@PostMapping(path="/employee/add" ,consumes="application/json")
	public Employee addEmployee(@RequestBody Employee employee)
	{ 
		Employee emp=employeeService.addEmployee(employee);
		        return emp;
	}
	
	@DeleteMapping("/employee/{id}")
	public String deleteEmployeeData(@PathVariable("id") int id)
	{
		employeeService.deleteEmployee(id);
		
		return "data deleted";
		
	}
	
	@PutMapping(path= "/employee/{id}" ,consumes="application/json")
	public Employee UpdateData(@RequestBody Employee employee,@PathVariable("id") int id)
	{
		Employee emp=employeeService.updateEmployee(id, employee);
		return emp;
	}
	
	@GetMapping("/employee")
	public ResponseEntity<List<Employee>> getEmployee()
	{
	List<Employee> emp=employeeService.getAllEmployee();
	if(emp.size()<0)
	{
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	    return ResponseEntity.status(HttpStatus.CREATED).body(emp);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getCategoryById( @PathVariable("id") int id)
	{
		 return employeeService.getById(id);
	}
	
	@GetMapping("/employee/number")
	public long getEmployeeCount() {
		long emp=employeeService.getEmployee();
		return emp;
	}
	
	@GetMapping("/employee/salary")
	public int getEmployeeSalary() {
		int emp=employeeService.totalSalary();
		return emp;
	}
	
	@GetMapping("/employee/attendance")
	public int getEmployeeAttendance() {
		int emp=employeeService.averageAttendance();
		return emp;
	}
}
