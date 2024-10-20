package com.employee.service;

public class NotFoundException extends RuntimeException {

    public  NotFoundException(int id,String name) {
        super("Could not find the "+name+" with id " + id);
    }

}
