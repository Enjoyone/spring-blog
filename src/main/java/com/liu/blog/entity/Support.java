package com.liu.blog.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
	
public class Support {
	@Id
	@GeneratedValue   //自动增长
	private int supportID;
	
	@OneToOne
	private User user;
	
	@ManyToOne
	private Article article;
	
	public int getSupportID() {
		return supportID;
	}
	public void setSupportID(int supportID) {
		this.supportID = supportID;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Article getArticle() {
		return article;
	}
	public void setArticle(Article article) {
		this.article = article;
	}
	
	
}
