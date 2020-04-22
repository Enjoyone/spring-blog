package com.liu.blog.service.admin;


import com.liu.blog.entity.Article;
import com.liu.blog.entity.Type;
import com.liu.blog.entity.User;
import com.liu.blog.repository.AdminRepository;
import com.liu.blog.repository.ArticleRepository;
import com.liu.blog.repository.TypeRepository;
import com.liu.blog.repository.UserRepository;
import com.liu.blog.service.article.ArticleService;
import com.liu.blog.service.type.TypeService;
import com.liu.blog.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.liu.blog.entity.Admin;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private TypeService typeService;
    @Autowired
    private UserService userService;


    //登录
    public Admin loginCheck(String adminUserName, String adminPWD) {
        Admin admin = adminRepository.findByAdminUserName(adminUserName);
        if (admin.getAdminPWD().equals(adminPWD)) {
            return admin;
        } else {
            return null;
        }
    }


    //    返回所有文章
    public List<Article> articles() {
        return articleService.findAll();
    }


    //    返回所有类型
    public List<Type> types() {
        return typeService.showAllTypes();
    }

    //    返回管理员用户
    public List<Admin> admins() {
        return adminRepository.findAll();
    }


//    返回普通用户

    public List<User> users() {
        return userService.findAll();
    }

}
