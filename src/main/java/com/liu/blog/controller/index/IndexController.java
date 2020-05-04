package com.liu.blog.controller.index;

import com.liu.blog.entity.Article;
import com.liu.blog.service.article.ArticleService;
import com.liu.blog.service.index.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class IndexController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private SearchService searchService;

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


    //    搜索
    @GetMapping("/search")
    public String search(Model model, String searchType, String searchContent) {
        System.out.println(searchType+""+searchType.getClass().getName());
        System.out.println(searchContent);


        switch (searchType) {
            case "1":
                model.addAttribute("articles", searchService.searchByArticleTitle(searchContent));
                return "/search/searchArticle";
            case "2":
                model.addAttribute("users", searchService.searchByUserName(searchContent));
                return "/search/searchUser";
            default:
                return "index/index";
        }


    }


}
