package com.employee.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.employee.service.NotFoundException;

@ControllerAdvice
public class NotFoundAdvice {

      @ResponseBody
	    @ExceptionHandler(NotFoundException.class)
	    @ResponseStatus(HttpStatus.NOT_FOUND)
	    public Map<String,String> exceptionHandler(NotFoundException exception) {

	        Map<String,String> errorMap = new HashMap<>();
	        errorMap.put("Error: ", exception.getMessage());

	        return errorMap;
	    }

}
