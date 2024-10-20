package com.employee.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.employee.entities.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

	
	@Query("select count(id)from Category")
	public int totalCategory();

}
