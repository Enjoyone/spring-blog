package com.liu.blog.repository;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface ArticleRepository extends JpaRepository<Article,Integer> {

    List<Article> findArticlesByUser(User user);
}
