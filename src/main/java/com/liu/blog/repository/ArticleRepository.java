package com.liu.blog.repository;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article,Integer> {

    List<Article> findArticlesByUser(User user);
}
