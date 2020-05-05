package com.liu.blog.repository;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ArticleRepository extends JpaRepository<Article, Integer> {


    @Query("select a from Article a where a.user.userID=?1")
    List<Article> findArticlesByUser(int userID);


    List<Article> findByArticleTitleContains(String articleTitle);


    @Query("update Article set articleTitle=?1 ,content=?2,type=?3 where articleID=?4")
    @Modifying
    int updateArticle(String articleTitle, String content, Type type, int articleID);


}
