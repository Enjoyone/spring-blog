package com.liu.blog.controller.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.liu.blog.entity.Type;
import com.liu.blog.service.type.TypeService;

@Controller
public class AddType {



	@Autowired
	private TypeService typeService;
	
	
	@GetMapping("/addType")
	public String addUser() {
		return "addType";
	}
	
	@PostMapping("/addType")
	public String addUser(Type type) {
		typeService.addType(type);
		return "addTypeResult";
		
	}
	
	
	
	
}
