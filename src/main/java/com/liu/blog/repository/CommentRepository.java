package com.liu.blog.repository;

import com.liu.blog.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CommentRepository extends JpaRepository<Comment,Integer> {
}
