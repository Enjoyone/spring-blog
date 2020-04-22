package com.liu.blog.controller.admin;


import com.liu.blog.entity.Admin;
import com.liu.blog.entity.Article;
import com.liu.blog.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/admin")
    public String admin(Model model) {
        model.addAttribute("admins", adminService.admins());
        model.addAttribute("users", adminService.users());
        model.addAttribute("articles", adminService.articles());
        model.addAttribute("types", adminService.types());
        return "admin/index/index";
    }


    //    登录
    @GetMapping("/adminLogin")
    public String toLogin() {
        return "admin/login/login";
    }

    @PostMapping("/adminLogin")
    public String login(Admin admin, HttpSession session) {
        System.out.println(admin.getAdminUserName());
        System.out.println(admin.getAdminPWD());

        if (adminService.loginCheck(admin.getAdminUserName(), admin.getAdminPWD()) != null) {
            session.setAttribute("admin", admin);
            return "redirect:admin";
        } else {
            return "admin/login/login";
        }

    }


    //adminWeb
    @GetMapping("/admin/adminWeb")
    public String adminWeb(String web, Model model) {
        switch (web) {
            case "manageUser":
                model.addAttribute("admins", adminService.admins());
                return "admin/user/manageUser";
            case "normalUser":

                model.addAttribute("users", adminService.users());
                return "admin/user/normalUser";
            case "article":

                model.addAttribute("articles", adminService.articles());
                return "admin/article/article";
            case "type":
                model.addAttribute("types", adminService.types());
                return "admin/article/type";
//            case "center":
//                model.addAttribute("admins", adminService.ce());
//                return "admin/center/center";
//            case "message":
//                model.addAttribute("admins", adminService.admins());
//                return "admin/message/message";
            default:
                return "forward:admin";
        }
    }




    //    退出
    @GetMapping("/adminLogout")
    public String adminLogout(HttpSession session) {
        session.invalidate();
        return "redirect:adminLogin";
    }

}
