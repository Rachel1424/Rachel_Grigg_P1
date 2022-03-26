package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repo.UserRepository;

@Service
public class UserServiceImpl  implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public Users findById(int id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).get();
	}

	@Override
	public void addUser(Users user) {
		// TODO Auto-generated method stub
		 userRepository.save(user);
	}

	@Override
	public void updateUser(int id, Users user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public void removeUser(int id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

}
