package com.liu.blog.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Article {
	
	
	@Id
	@GeneratedValue   //自动增长
    private int articleID;
	
	@Column(length = 30)
    private String articleTitle;
	
	@ManyToOne
    private Type  type;

	@ManyToOne
	private User user;
	
	
	@Column(length = 30)
    private String content;
    private LocalDate launchTime=LocalDate.now();
    
    private boolean articlePublic=true;
    private boolean articleComment=true;
    
    private boolean articleDraft=false;
    private boolean articleBlock=false;
	public int getArticleID() {
		return articleID;
	}
	public void setArticleID(int articleID) {
		this.articleID = articleID;
	}
	public String getArticleTitle() {
		return articleTitle;
	}
	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}


	public Type getType() {
		return type;
	}
	public void setType(Type type) {
		this.type = type;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public LocalDate getLaunchTime() {
		return launchTime;
	}
	public void setLaunchTime(LocalDate launchTime) {
		this.launchTime = launchTime;
	}
	public boolean isArticlePublic() {
		return articlePublic;
	}
	public void setArticlePublic(boolean articlePublic) {
		this.articlePublic = articlePublic;
	}
	public boolean isArticleComment() {
		return articleComment;
	}
	public void setArticleComment(boolean articleComment) {
		this.articleComment = articleComment;
	}
	public boolean isArticleDraft() {
		return articleDraft;
	}
	public void setArticleDraft(boolean articleDraft) {
		this.articleDraft = articleDraft;
	}
	public boolean isArticleBlock() {
		return articleBlock;
	}
	public void setArticleBlock(boolean articleBlock) {
		this.articleBlock = articleBlock;
	}
    
    
}
