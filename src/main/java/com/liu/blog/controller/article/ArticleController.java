package com.liu.blog.controller.article;

import com.liu.blog.entity.Article;
import com.liu.blog.entity.Type;
import com.liu.blog.entity.User;
import com.liu.blog.repository.TypeRepository;
import com.liu.blog.repository.UserRepository;
import com.liu.blog.service.article.ArticleService;
import com.liu.blog.service.type.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private TypeService typeService;

    public ArticleController() {
    }

    @GetMapping("/showArticle")
    //     查看文章
    @ResponseBody
    public Article findOne(int articleID) {
        return articleService.findOne(articleID);


    }

    public List<Article> findAllArticles() {
        return articleService.findAll();
    }

    public List<Article> findArticleByUserID(int userID) {
        User user = new User();
        user.setUserID(userID);
        return articleService.findAllbyUserID(user);
    }


    //    写文章


    @GetMapping("/write")
    public String toWrite(Model model, HttpServletRequest request) {
        HttpSession httpSession = request.getSession();
        User user = (User) httpSession.getAttribute("user");
//        返回文章类型
        List<Type> types = typeService.showTypesByUserID(user.getUserID());
        model.addAttribute("types", types);
        return "article/write";
    }


    @PostMapping("/write")
    public Article addArticle(String articleTitle, int typeID, String content, HttpServletRequest request) {
        HttpSession httpSession = request.getSession();
        User user = (User) httpSession.getAttribute("user");

        Type type = typeService.getOne(typeID);


        Article article = new Article();
        article.setArticleTitle(articleTitle);
        article.setType(type);
        article.setUser(user);
        article.setContent(content);

        articleService.addArticle(article);

        return article;

    }


    //    删除文章
    public boolean deleteArticle(int articleID) {
        return articleService.deleteArticle(articleID);
    }


    //    类型

    @GetMapping("/addType")
    @ResponseBody
    public String addType(Type type, HttpServletRequest request) {
        HttpSession httpSession = request.getSession();
        User user = (User) httpSession.getAttribute("user");
        System.out.println(user.getUserID());
        type.setUser(user);

        typeService.addType(type);
        return "1";
    }

    @GetMapping("/showType")
    @ResponseBody
    public String showType() {
        List<Type> types = typeService.showAllTypes();
        return "showType";
    }
}
