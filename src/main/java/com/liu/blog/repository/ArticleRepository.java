package com.liu.blog.repository;


import com.liu.blog.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface ArticleRepository extends JpaRepository<Article,Integer> {


    @Query("select a from Article a where a.user.userID=?1")
    List<Article> findArticlesByUser(int userID);

}
