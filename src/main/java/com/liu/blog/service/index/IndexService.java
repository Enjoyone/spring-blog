package com.liu.blog.service.index;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.User;
import com.liu.blog.service.article.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexService {
    @Autowired
    private ArticleService articleService;

    //@ResponseBody
    public List<Article> backIndexArticles() {
        return articleService.findAll();
    }





}
