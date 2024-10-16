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

import com.employee.entities.Category;
import com.employee.service.CategoryService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping(path="add" ,consumes="application/json")
	public Category addCategory(@RequestBody Category category)
	{ 
		        Category ct=categoryService.addCategory(category);
		        return ct;
	}
	
	@DeleteMapping("/category/{id}")
	public void DeleteData(@PathVariable("id") int id)
	{
		categoryService.deleteCategory(id);
	}
	
	@PutMapping(path= "/category/{id}" ,consumes="application/json")
	public Category UpdateData(@RequestBody Category category,@PathVariable("id") int id)
	{
		 categoryService.updateCategory(category, id);
		return category;
	}
	
	@GetMapping("/category")
	public ResponseEntity<List<Category>> getCategory()
	{
	List<Category> list=categoryService.getAllCategory();
	if(list.size()<=0)
	{
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	    return ResponseEntity.status(HttpStatus.CREATED).body(list);
	}
	
	
	@GetMapping("/categories/{id}")
	public Category getCategoryById( @PathVariable("id") int id)
	{
		 return categoryService.getCategoryById(id);
	}
	
	@GetMapping("/categoryTotal")
	public int totalCategory() {
		return categoryService.totalCategory();
	}
}
