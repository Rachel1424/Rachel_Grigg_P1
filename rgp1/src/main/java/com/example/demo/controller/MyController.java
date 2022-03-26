package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
@RequestMapping("/welcome")
	public String welcome(){
		
		return "welcome to Spring boot we workin";
	}
}
