package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Users;

public interface UserService {
	public List<Users> findAll();
	
	public Users findById(int id);
	
	public void addUser(Users user);
	
	public void updateUser(int id, Users user);
	
	public void removeUser(int id);

}
