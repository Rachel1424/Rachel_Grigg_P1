package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Users;
import com.example.demo.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	
	public List<Users> getUsers(){
		
		//List<Users> users = new ArrayList<Users>();
	//	users.add(new Users(24, "lol","supper","this@that"));
		return userService.findAll();	
		
	}
	
	@GetMapping("/users/{id}")
	
	public void addUser(Users user) {
		userService.addUser(user);
	}
	
	@PostMapping
	
	public Users getUser(@PathVariable int id){
		
	return userService.findById(id);
	}
	
    @PutMapping("/users/{id}")
    
    public void updateUser(@PathVariable int id, @RequestBody Users user) {
        userService.updateUser(id, user);
    }

    @DeleteMapping("/users/{id}")
    public void removeUser(@PathVariable int id) {
        userService.removeUser(id);
    }
}


	
