package com.liu.blog.controller.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
    @RequestMapping("/")
    public String index() {
        System.out.println("index");



        return "/index/index";
    }



    @RequestMapping("/info")
    public String info() {
        System.out.println("info");
        return "info/info";
    }

}
