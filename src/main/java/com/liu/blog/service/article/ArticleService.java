package com.liu.blog.service.article;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.Type;
import com.liu.blog.entity.User;
import com.liu.blog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    public Article findOne(int articleID) {
        Article article = articleRepository.getOne(articleID);
        return article;
    }

    //根据用户ID查询用户的所有文章
    public List<Article> findAllbyUserID(int userID) {
        return articleRepository.findArticlesByUser(userID);
    }

    //    查询所有文章
    public List<Article> findAll() {
        return articleRepository.findAll();
    }


//    写文章

    public int addArticle(Article article) {
        articleRepository.save(article);
        return article.getArticleID();
    }

    //    修改文章
    @Transactional
    public int updateArticle(String articleTitle, String content, Type type, int articleID) {
        return articleRepository.updateArticle(articleTitle, content, type, articleID);
    }

    //    删除文章
    public boolean deleteArticle(int articleID) {
        articleRepository.deleteById(articleID);
        return !articleRepository.existsById(articleID);

    }






}

