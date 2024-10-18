package com.employee.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.employee.entities.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

	public Employee findById(int id);
	
	@Query("select sum(salary)from Employee")
	public int totalSalary();
	
	@Query("select avg(attendance)from Employee")
	public int averageAttendance();
	
	
}
