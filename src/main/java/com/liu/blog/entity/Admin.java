package com.liu.blog.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	
	@Id
	private String adminID;
	@Column(length = 50)
	private String adminPWD;
	@Column(length = 30)
	private String name;
	private String gender; 
	@Column(length = 11)
	private String phone;
	
	private boolean type=false; //--1 超级  0 普通
	
	private LocalDate registerTime=LocalDate.now();
	
	private boolean status=true; // --停用，正常

	public String getAdminID() {
		return adminID;
	}

	public void setAdminID(String adminID) {
		this.adminID = adminID;
	}

	public String getAdminPWD() {
		return adminPWD;
	}

	public void setAdminPWD(String adminPWD) {
		this.adminPWD = adminPWD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isType() {
		return type;
	}

	public void setType(boolean type) {
		this.type = type;
	}

	public LocalDate getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(LocalDate registerTime) {
		this.registerTime = registerTime;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
}
