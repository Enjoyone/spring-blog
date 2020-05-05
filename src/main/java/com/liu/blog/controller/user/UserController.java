package com.liu.blog.controller.user;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.Type;
import com.liu.blog.entity.User;
import com.liu.blog.service.article.ArticleService;
import com.liu.blog.service.type.TypeService;
import com.liu.blog.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.time.LocalDate;
import java.time.Period;
import java.util.List;


@Controller
//@SessionAttributes(value = "user")
public class UserController {


    @Autowired
    private UserService userService;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private TypeService typeService;


    //注册
    @GetMapping("/register")
    public String addUser() {
        return "loginRegister/register";
    }

    @PostMapping("/register")
    public String addUser(@Valid User user, BindingResult bindingResult, Model model) {
        System.out.println("register post");
        userService.addUser(user);
        model.addAttribute("user", user);
        if (bindingResult.hasErrors()) {
            return "loginRegister/register";
        }
        return "loginRegister/registerSuccess";
    }


    //登录
    @GetMapping("/login")
    public String login() {
        return "loginRegister/login";
    }

    @PostMapping("/login")

    public String loginCheck(Model model, String userName, String userPWD, HttpSession session) {
        System.out.println("userName:\t" + userName + "userPWD:\t" + userPWD);
        User user = userService.checkUser(userName, userPWD);
        if (user != null) {
            session.setAttribute("user", user);
            return "forward:/";
        } else {
            model.addAttribute("error", "账号或密码错误！");
            return "loginRegister/login";
        }

    }


    //    退出
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }


    //    个人中心
    @GetMapping("/userCenter")
    public String userCenter(String type, Model model, HttpSession session) {
        User user = (User) session.getAttribute("user");

        List<Article> articles = articleService.findAllbyUserID(user.getUserID());
        List<Type> types = typeService.showTypesByUserID(user.getUserID());

        model.addAttribute("user", user);
        model.addAttribute("articles", articles);
        model.addAttribute("types", types);

        if (type != null) {
            System.out.println(type);
            if (type.equals("blog")) {
                return "user/userCenter/blog";
            } else {
                return "user/userCenter/account";
            }
        } else {

            LocalDate today = LocalDate.now();
            LocalDate registerTime = user.getRegisterTime();

            Period p = Period.between(registerTime, today);
            System.out.print(p.getDays());
            model.addAttribute("days", p.getDays());

            return "user/userCenter/userCenterIndex";
        }
    }


    //  个人首页     userIndex
    @GetMapping("/userIndex")
    public String userIndex(int userID, Model model) {
        System.out.println("userID-->index" + userID);

        User user = userService.getOne(userID);

        List<Article> articles = articleService.findAllbyUserID(userID);
        List<Type> types = typeService.showTypesByUserID(userID);

        model.addAttribute("user", user);
        model.addAttribute("articles", articles);
        model.addAttribute("types", types);

        return "user/userIndex/userIndex";
    }

    //    修改个人信息
    @PostMapping("/changeInfo")
    @ResponseBody
    public String changeInfo(User user, HttpSession session) {
        User user1 = userService.getOne(((User) session.getAttribute("user")).getUserID());

        if (userService.updateInfo(user, user1.getUserID()) > 0) {
            session.invalidate();
            return "1";
        } else {
            return "-1";
        }

    }


    //修改密码
    @PostMapping("/changePWD")
    @ResponseBody
    public String changePWD(String newPWD, String PWD, HttpSession session) {
        User user = (User) session.getAttribute("user");
//        User user1 = userService.getOne(user.getUserID());

        if (PWD.equals(user.getUserPWD())) {
            if (userService.updateUserPWD(newPWD, user.getUserID()) > 0) {
                session.invalidate();
                return "1";
            } else {
                return "-1";
            }
        } else {
            return "-1";
        }

    }


    //    修改手机，微信，邮箱等等
    @PostMapping("/changeAccount")
    @ResponseBody
    public String changeAccount(String changeType, String content, HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (userService.updateContent(changeType, content, user.getUserID()) > 0) {

            return "1";
        } else {
            return "-1";
        }

    }


}
