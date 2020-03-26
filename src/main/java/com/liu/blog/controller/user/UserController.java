package com.liu.blog.controller.user;


import com.liu.blog.entity.User;
import com.liu.blog.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import javax.servlet.http.HttpSession;


@Controller
//@SessionAttributes(value = "user")
public class UserController {


    @Autowired
    private UserService userService;


    //注册
    @GetMapping("/register")
    public String addUser() {
        return "loginRegister/register";
    }

    @PostMapping("/register")
    public String addUser(User user) {
        System.out.println("register post");
        User user1 = userService.addUser(user);
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
            return "loginRegister/login";
        }

    }


    //    退出
    @GetMapping("/logout")
    public String logout(SessionStatus sessionStatus) {
        sessionStatus.setComplete();
        return "redirect:/";
    }


}
