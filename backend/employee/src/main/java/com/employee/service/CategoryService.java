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
	
	
	public String deleteCategory(int id) {
		
		if(!categoryRepo.existsById(id))
		{
			throw new NotFoundException(id, "category");
		}
		categoryRepo.deleteById(id);
	        return "User with the id " + id + " has been successfully deleted.";
	}
	
	public List<Category> getAllCategory()
	{
		List<Category> cat=(List<Category>)categoryRepo.findAll();
		return cat;
	}
	
	public Category updateCategory(Category newCategory, int id) {
		
		return categoryRepo.findById(id)
		.map(category->{
			category.setName(newCategory.getName());
			return categoryRepo.save(category);
		}).orElseThrow(()->new NotFoundException(id,"category"));
		
	}
	
	public Category getCategoryById(int id) {
		return categoryRepo.findById(id)
		.orElseThrow(()->new NotFoundException(id, "category"));
		
	}
	
	public int totalCategory() {
		int cat=categoryRepo.totalCategory();
		return cat;
	}
	

}
