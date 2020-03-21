package com.liu.blog.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Type {
	@Id
	@GeneratedValue   //自动增长
	private int typeID;
	
	//
	@ManyToOne()
	private User user;
	
	@Column(length = 10)
	private String typeName;
	
	private LocalDate createTime=LocalDate.now();
	private boolean status=true;
	
	
	
	
	public int getTypeID() {
		return typeID;
	}
	public void setTypeID(int typeID) {
		this.typeID = typeID;
	}
	 
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public LocalDate getCreateTime() {
		return createTime;
	}
	public void setCreateTime(LocalDate createTime) {
		this.createTime = createTime;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}

	
	
}
