package com.liu.blog.repository;

import com.liu.blog.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("select a from Comment a where a.article.articleID=?1")
    List<Comment> findAllComments(int articleID);




}
