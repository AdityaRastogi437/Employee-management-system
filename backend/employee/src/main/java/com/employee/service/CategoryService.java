package com.employee.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dao.CategoryRepo;
import com.employee.entities.Category;

@Service
public class CategoryService {


	@Autowired
	private CategoryRepo categoryRepo;
	
	public Category addCategory(Category category) {
		  
		    Category cat=categoryRepo.save(category);
		    return cat;
	}
	
	
	public void deleteCategory(int id) {
		 categoryRepo.deleteById(id);;
	}
	
	public List<Category> getAllCategory()
	{
		List<Category> cat=(List<Category>)categoryRepo.findAll();
		return cat;
	}
	
	public void updateCategory(Category category, int id) {
		
		category.setId(id);
		categoryRepo.save(category);
		
	}
	
	public Category getCategoryById(int id) {
		Category category=null;
		try
		{
			category=this.categoryRepo.findById(id);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return category;
		
	}
	
	public int totalCategory() {
		int cat=categoryRepo.totalCategory();
		return cat;
	}
	

}
