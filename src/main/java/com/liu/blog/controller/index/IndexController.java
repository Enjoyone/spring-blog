package com.liu.blog.controller.index;

import com.liu.blog.entity.Article;
import com.liu.blog.service.article.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class IndexController {

    @Autowired
    private ArticleService articleService;

    @RequestMapping("/")
    public String index(Model model) {
        System.out.println("index");
        List<Article> articles = articleService.findAll();
//        for (Article article:articles
//             ) {
//            System.out.println(article.getArticleTitle());
//        }
        model.addAttribute("articles", articles);
        return "index/index";
    }


    @RequestMapping("/info")
    public String info() {
        System.out.println("info");
        return "info/info";
    }


//    精选


//    月佳





}
