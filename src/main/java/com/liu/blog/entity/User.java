package com.liu.blog.entity;

import java.time.LocalDate;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class User {
	@Id
	@GeneratedValue
	private int userID;//不设为自动增长

	@Column(length = 30)
	private String userName;

	@Column(length = 30)
	private String userPWD;
	
	@Column(length = 50)
	private String name;
	private  String gender;	
	//临时属性age
	@Transient
	private int age;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate birth;
	
	private String phone;
	private String email;
	private String wechat;
	private String introduction;
	private LocalDate registerTime=LocalDate.now();
	private boolean status=true;


	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPWD() {
		return userPWD;
	}

	public void setUserPWD(String userPWD) {
		this.userPWD = userPWD;
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public LocalDate getBirth() {
		return birth;
	}

	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWechat() {
		return wechat;
	}

	public void setWechat(String wechat) {
		this.wechat = wechat;
	}

	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
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
